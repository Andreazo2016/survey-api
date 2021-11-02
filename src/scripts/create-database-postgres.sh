docker run \
  --name survey \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD="postgres" \
  -e POSTGRES_DB=survey-api \
  -p 5432:5432 \
  -d \
  postgres