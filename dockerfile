# Use Node.js 20 (required by react-router@7.9.4)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (layer cache optimization)
COPY package*.json ./

# Install dependencies (deterministic, faster than npm install)
RUN npm ci

# Copy application source
COPY . .

# Disable Next.js telemetry at build time
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
