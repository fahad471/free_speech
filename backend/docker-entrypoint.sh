#!/bin/sh
echo "Running prisma migrate deploy..."
npx prisma migrate deploy || echo "Prisma migrate failed or no migrations"

echo "Starting backend server..."
exec "$@"
