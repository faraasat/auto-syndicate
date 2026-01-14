# AutoSyndicate™ ML API

Python FastAPI microservice for AI-powered loan processing and capital allocation.

## Features

- **Capital Allocation Engine**: ML-driven syndication matching
- **Document Parsing**: AI extraction using Gemini
- **Risk Assessment**: Predictive risk scoring
- **Covenant Monitoring**: Breach prediction analytics
- **ESG Analysis**: Sustainability metrics calculation

## Setup

### Prerequisites
- Python 3.12+
- Poetry

### Installation

```bash
# Install Poetry
curl -sSL https://install.python-poetry.org | python3 -

# Install dependencies
poetry install

# Copy environment file
cp .env.example .env

# Edit .env with your API keys
```

### Running

```bash
# Development
poetry run uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Production
poetry run uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

### API Documentation

Once running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Endpoints

### Health Check
- `GET /` - Service info
- `GET /health` - Health status

### ML Services
- `POST /api/allocate` - Capital allocation recommendations
- `POST /api/parse-document` - Document parsing
- `POST /api/risk-assessment` - Risk scoring
- `POST /api/covenant-predict` - Covenant breach prediction
- `POST /api/esg-analysis` - ESG scoring

## Docker

```bash
# Build
docker build -t autosyndicate-api .

# Run
docker run -p 8000:8000 --env-file .env autosyndicate-api
```
