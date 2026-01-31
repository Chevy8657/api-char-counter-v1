# Char Counter (v1)

## Description
Counts all characters in a string, including spaces.

## Health
GET `/health` → `{ "status": "ok" }`

## Endpoint
POST `/v1/char-count`

### Payload
```json
{ "input": "Hello world" }
