## init.sh

# Colores para mensajes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Iniciando configuración del proyecto...${NC}"

# Instalar dependencias del backend
echo -e "${GREEN}Instalando dependencias del backend...${NC}"
cd backend
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}Error al instalar dependencias del backend${NC}"
    exit 1
fi

# Instalar dependencias del frontend
echo -e "${GREEN}Instalando dependencias del frontend...${NC}"
cd ../frontend
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}Error al instalar dependencias del frontend${NC}"
    exit 1
fi

# Volver al directorio raíz
cd ..

# Crear archivos .env si no existen
if [ ! -f "backend/.env" ]; then
    echo -e "${GREEN}Creando archivo .env para backend...${NC}"
    cat > backend/.env <<EOF
PORT=3000
EOF
fi

if [ ! -f "frontend/.env" ]; then
    echo -e "${GREEN}Creando archivo .env para frontend...${NC}"
    cat > frontend/.env <<EOF
VITE_API_URL=http://localhost:3000/api
EOF
fi

# Iniciar servidores
echo -e "${GREEN}Iniciando servidores...${NC}"

# Iniciar backend en segundo plano
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

# Iniciar frontend en segundo plano
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

# Esperar a que los servidores estén listos
sleep 5

echo -e "${YELLOW}Servidores iniciados:${NC}"
echo -e "Backend (Node.js): ${GREEN}http://localhost:3000${NC}"
echo -e "Frontend (React): ${GREEN}http://localhost:5173${NC}"

# Mantener el script corriendo
echo -e "\nPresiona Ctrl+C para detener los servidores"
wait $BACKEND_PID $FRONTEND_PID

# Limpieza al salir
trap "kill $BACKEND_PID $FRONTEND_PID 2> /dev/null" EXIT