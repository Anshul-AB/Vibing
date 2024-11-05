# Backend setup
FROM node:18.9.1 as backend
WORKDIR /app
COPY backend/package.json ./backend/
RUN npm install --prefix ./backend
COPY backend/ ./backend/
EXPOSE 5050

# Frontend setup
FROM node:18.9.1 as frontend
WORKDIR /app
COPY frontend/package.json ./frontend/
RUN npm install --prefix ./frontend
COPY frontend/ ./frontend/
RUN npm run build

# Final Image
FROM node:18.9.1 as final
WORKDIR /app
# Copy built frontend files to final image
COPY --from=frontend /app/frontend/build ./frontend/build

# Copy backend files to final image
COPY --from=backend /app/backend ./backend

# Set environment variable
ENV PORT=5050

EXPOSE 5050

# Start the backend server
CMD ["npm", "start", "--prefix", "./backend"]
