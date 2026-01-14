from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os
from datetime import datetime

app = FastAPI(
    title="AutoSyndicate™ ML API",
    description="AI-powered capital allocation and loan processing microservice",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================== MODELS ====================

class LenderProfile(BaseModel):
    id: str
    institutionName: str
    aum: Optional[float] = None
    riskAppetite: str = "MODERATE"
    minInvestment: float = 100000
    maxInvestment: Optional[float] = None
    preferredSectors: List[str] = []
    esgPreferences: Dict[str, Any] = {}

class LoanRequest(BaseModel):
    id: str
    title: str
    amount: float
    term: int
    interestRate: float
    purpose: str
    riskScore: Optional[float] = None
    creditRating: Optional[str] = None
    esgScore: Optional[float] = None
    structuredData: Dict[str, Any] = {}

class AllocationRecommendation(BaseModel):
    lenderId: str
    lenderName: str
    amount: float
    percentage: float
    confidence: float
    reasoning: str
    matchScore: float

class AllocationRequest(BaseModel):
    loan: LoanRequest
    lenders: List[LenderProfile]
    constraints: Optional[Dict[str, Any]] = {}

class DocumentParseRequest(BaseModel):
    documentUrl: str
    documentType: str

# ==================== ROUTES ====================

@app.get("/")
async def root():
    return {
        "service": "AutoSyndicate™ ML API",
        "status": "healthy",
        "version": "1.0.0",
        "timestamp": datetime.utcnow().isoformat()
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "services": {
            "groq": "available",
            "gemini": "available",
            "sklearn": "available"
        }
    }

@app.post("/api/allocate", response_model=List[AllocationRecommendation])
async def allocate_capital(request: AllocationRequest):
    """
    ML-driven capital allocation engine
    Matches loan characteristics with lender preferences
    """
    try:
        recommendations = []
        loan = request.loan
        lenders = request.lenders
        
        # Calculate total loan amount
        total_amount = loan.amount
        
        for lender in lenders:
            # Calculate match score based on multiple factors
            match_score = calculate_match_score(loan, lender)
            
            if match_score > 0.5:  # Only recommend if match score > 50%
                # Calculate allocation amount
                allocation_amount = min(
                    lender.maxInvestment or total_amount,
                    total_amount * 0.5,  # Max 50% of loan per lender
                    lender.minInvestment * 2  # Reasonable upper bound
                )
                
                percentage = (allocation_amount / total_amount) * 100
                
                # Generate reasoning
                reasoning = generate_allocation_reasoning(loan, lender, match_score)
                
                recommendations.append(AllocationRecommendation(
                    lenderId=lender.id,
                    lenderName=lender.institutionName,
                    amount=allocation_amount,
                    percentage=percentage,
                    confidence=match_score,
                    reasoning=reasoning,
                    matchScore=match_score
                ))
        
        # Sort by match score (descending)
        recommendations.sort(key=lambda x: x.matchScore, reverse=True)
        
        return recommendations[:10]  # Return top 10 recommendations
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/parse-document")
async def parse_document(request: DocumentParseRequest):
    """
    AI-powered document parsing using Gemini
    Extracts structured data from loan documents
    """
    try:
        # Mock structured data extraction
        # In production, this would use Gemini or other AI models
        extracted_data = {
            "borrower": "Sample Corp",
            "loanAmount": 50000000,
            "term": 36,
            "interestRate": 5.5,
            "purpose": "Working capital",
            "covenants": [
                {
                    "type": "FINANCIAL",
                    "name": "Debt Service Coverage Ratio",
                    "threshold": 1.25,
                    "frequency": "QUARTERLY"
                }
            ],
            "riskFactors": [
                "Industry concentration",
                "Geographic concentration"
            ],
            "esgMetrics": {
                "carbonIntensity": 125.5,
                "esgScore": 72.3
            }
        }
        
        return {
            "success": True,
            "documentType": request.documentType,
            "extractedData": extracted_data,
            "confidence": 0.89
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/risk-assessment")
async def assess_risk(loan: LoanRequest):
    """
    ML-based risk scoring using scikit-learn
    """
    try:
        # Mock risk assessment
        # In production, this would use trained ML models
        risk_score = calculate_risk_score(loan)
        
        return {
            "loanId": loan.id,
            "riskScore": risk_score,
            "riskCategory": get_risk_category(risk_score),
            "factors": {
                "creditRating": loan.creditRating or "BB+",
                "loanToValue": 0.75,
                "debtServiceCoverage": 1.35,
                "industryRisk": "Medium"
            },
            "recommendation": "Approve with standard terms" if risk_score < 0.6 else "Approve with enhanced monitoring"
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/covenant-predict")
async def predict_covenant_breach(data: Dict[str, Any]):
    """
    Predictive analytics for covenant breach probability
    """
    try:
        covenant_id = data.get("covenantId")
        historical_values = data.get("historicalValues", [])
        
        # Mock prediction
        breach_probability = 0.15  # 15% probability
        
        return {
            "covenantId": covenant_id,
            "breachProbability": breach_probability,
            "trend": "stable",
            "nextCheckDate": "2026-04-01",
            "recommendedAction": "Continue monitoring" if breach_probability < 0.3 else "Increase monitoring frequency"
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/esg-analysis")
async def analyze_esg(loan: LoanRequest):
    """
    ESG scoring and analysis
    """
    try:
        esg_score = loan.esgScore or calculate_esg_score(loan)
        
        return {
            "loanId": loan.id,
            "esgScore": esg_score,
            "breakdown": {
                "environmental": 75.2,
                "social": 68.5,
                "governance": 82.1
            },
            "alignment": {
                "unepFi": "Compliant",
                "greenBondPrinciples": "Partial"
            },
            "recommendations": [
                "Enhance carbon disclosure reporting",
                "Implement supplier diversity program"
            ]
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ==================== HELPER FUNCTIONS ====================

def calculate_match_score(loan: LoanRequest, lender: LenderProfile) -> float:
    """Calculate match score between loan and lender"""
    score = 0.0
    
    # Amount compatibility (30%)
    if lender.minInvestment <= loan.amount <= (lender.maxInvestment or float('inf')):
        score += 0.3
    
    # Risk appetite matching (30%)
    risk_map = {"LOW": 0.3, "MODERATE": 0.6, "HIGH": 0.9}
    loan_risk = loan.riskScore or 0.5
    lender_risk = risk_map.get(lender.riskAppetite, 0.5)
    risk_diff = abs(loan_risk - lender_risk)
    score += 0.3 * (1 - risk_diff)
    
    # ESG alignment (20%)
    if loan.esgScore and lender.esgPreferences:
        score += 0.2 * (loan.esgScore / 100)
    else:
        score += 0.1  # Partial credit if no ESG data
    
    # Sector preference (20%)
    if loan.purpose and lender.preferredSectors:
        # Simple keyword matching
        if any(sector.lower() in loan.purpose.lower() for sector in lender.preferredSectors):
            score += 0.2
    else:
        score += 0.1  # Partial credit
    
    return min(score, 1.0)

def generate_allocation_reasoning(loan: LoanRequest, lender: LenderProfile, match_score: float) -> str:
    """Generate human-readable reasoning for allocation"""
    reasons = []
    
    if lender.minInvestment <= loan.amount:
        reasons.append(f"Loan size (${loan.amount:,.0f}) aligns with {lender.institutionName}'s investment range")
    
    if match_score > 0.8:
        reasons.append("Strong overall match across multiple criteria")
    elif match_score > 0.6:
        reasons.append("Good match with acceptable risk-return profile")
    
    if loan.esgScore and loan.esgScore > 70:
        reasons.append(f"Strong ESG score ({loan.esgScore:.1f}) meets sustainability criteria")
    
    return ". ".join(reasons) + "."

def calculate_risk_score(loan: LoanRequest) -> float:
    """Calculate risk score for a loan"""
    base_score = 0.5
    
    # Adjust based on interest rate (higher rate = higher risk)
    if loan.interestRate > 7:
        base_score += 0.2
    elif loan.interestRate < 4:
        base_score -= 0.1
    
    # Adjust based on term
    if loan.term > 60:  # > 5 years
        base_score += 0.1
    
    # Use existing risk score if available
    if loan.riskScore:
        base_score = (base_score + loan.riskScore) / 2
    
    return min(max(base_score, 0.0), 1.0)

def get_risk_category(risk_score: float) -> str:
    """Convert risk score to category"""
    if risk_score < 0.3:
        return "Low Risk"
    elif risk_score < 0.6:
        return "Medium Risk"
    else:
        return "High Risk"

def calculate_esg_score(loan: LoanRequest) -> float:
    """Calculate ESG score for a loan"""
    # Mock calculation
    return 72.5

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
