#!/bin/bash

echo "🤘 Starting Metal Albums Monitor..."
echo ""

# Check if node_modules exist in backend
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

# Check if node_modules exist in frontend
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

echo ""
echo "🚀 Starting backend server (port 3001)..."
cd backend && npm start &
BACKEND_PID=$!

sleep 3

echo "🎨 Starting frontend dev server (port 5173)..."
cd frontend && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Metal Albums Monitor is running!"
echo ""
echo "📱 Frontend: http://localhost:5173"
echo "🔧 Backend:  http://localhost:3001"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for user to press Ctrl+C
trap "echo ''; echo '🛑 Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
