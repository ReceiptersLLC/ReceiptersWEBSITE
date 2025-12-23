import json
import os

features_data = {
    "digital-receipt-issuance": {
        "title": "Digital Receipting",
        "subtitle": "Goodbye paper. Hello smart, compliant receipts.",
        "overview": "Digital Receipting is your first step into the Receipters ecosystem. Replace paper slips with smart, secure digital receipts that are instantly delivered to your customers and stored in a structured format for your business. Receipts can be triggered from POS, SoftPOS, e-commerce platforms, or the Receipters app – all feeding into a single, standardized system.",
        "keyFeatures": [
            "Instant Digital Issuance: Generate and send receipts via SMS, email, app, or QR code at checkout.",
            "Structured Data by Default: Every receipt is automatically converted into structured JSON: merchant, outlet, timestamp, line items, taxes, totals, and payment method.",
            "Tax and Compliance Ready: Capture the right fields for your jurisdiction to simplify VAT/tax reporting and audits.",
            "Multi-Channel Support: Works with physical stores, online shops, delivery apps, and more."
        ],
        "benefitsBusiness": [
            "Reduce paper and printer costs",
            "Decrease receipt loss and disputes",
            "Improve customer experience at checkout",
            "Create a clean, consistent data trail for finance and compliance teams"
        ],
        "idealFor": "Retailers, supermarkets, restaurants, hotels, pharmacies, service providers, and any business issuing high volumes of receipts."
    },
    "receipt-storage": {
        "title": "Receipt Storage",
        "subtitle": "A secure, searchable vault for all your receipts.",
        "overview": "Receipt Storage turns Receipters into your single source of truth for receipts. All digital receipts, and any legacy paper receipts scanned via the app, are stored in a secure, centralized vault. Merchants and customers can quickly find what they need using flexible search tools – without digging through folders, files, or boxes.",
        "keyFeatures": [
            "Centralized Receipt Vault: Store every receipt – digital or scanned – in one place.",
            "Advanced Search and Filters: Find receipts by date, store, customer, SKU, amount, payment method, or tax reference.",
            "Role-Based Access Control: Assign access levels to staff (e.g., finance, audit, branch managers) to ensure the right people see the right data.",
            "Retention Policies and Audit Trails: Configure how long data is kept and track who accessed or exported what.",
            "Multi-Tenant Design: Support multiple outlets, branches, merchants, and even white-label scenarios under one architecture."
        ],
        "benefitsBusiness": [
            "Faster responses to customer queries and audits",
            "Stronger accountability and governance",
            "Simplified records management and retrieval",
            "A foundation for future analytics and AI add-ons"
        ],
        "benefitsConsumer": [
            "One place to view and download receipts from multiple merchants",
            "Easier warranty claims, returns, and expense reimbursement",
            "Clear history of personal spending"
        ],
        "idealFor": "Businesses that need clean, long-term records; institutions preparing for stricter digital record-keeping and tax transparency; consumers who want their spending organized."
    },
    "multi-device": {
        "title": "Receipters App",
        "subtitle": "Receipts in your pocket – for merchants and consumers.",
        "overview": "The Receipters App is the front door to the Receipters Vault. It gives both merchants and consumers a simple, mobile-first way to capture, view, and manage receipts in real time. For merchants, the app can be used to capture high-resolution images of receipts from legacy tills, issue digital receipts where POS integration is still in progress, and quickly look up past transactions. For consumers, the app becomes a personal receipt wallet – a single place to find every receipt from participating merchants, track spending, and access warranties or expense records.",
        "keyFeaturesMerchant": [
            "Receipt Image Capture: Snap high-resolution photos of long or short receipts; our engine stitches and reads them into structured JSON for storage.",
            "Quick Digital Issuance: Send digital receipts via SMS, email, or QR when your POS or SoftPOS is not yet fully integrated.",
            "Instant Lookup: Search for receipts by date, customer, amount, or SKU when handling queries, returns, or disputes – right from your phone or tablet.",
            "Branch and Role Support: Log in as a Merchant User with the correct outlet and role permissions, aligned with your organization's access rules."
        ],
        "keyFeaturesConsumer": [
            "Personal Receipt Wallet: Automatically collect digital receipts from participating merchants and store them in the cloud.",
            "Smart Search and Filters: Find receipts by store, category, date, or amount – ideal for returns, claims, reimbursements, and tax filings.",
            "Spending Snapshots: Get a simple overview of how much you've spent and where (full analytics unlocks with the Data Analysis product where enabled).",
            "Secure Sharing: Share receipts with employers, insurers, or accountants via secure links or exports instead of forwarding screenshots."
        ],
        "benefitsBusiness": [
            "Faster rollout in environments where POS/SoftPOS integrations take time",
            "A direct digital channel to customers post-transaction",
            "Reduced friction when resolving customer queries and returns",
            "More complete data capture from mixed or legacy environments"
        ],
        "benefitsConsumer": [
            "No more lost receipts",
            "Easy proof of purchase for returns and warranties",
            "Clear view of personal spending in one app"
        ],
        "idealFor": "Merchants at any stage of digital transformation, and consumers who want a clean, organized view of their financial life."
    },
    "data-analysis": {
        "title": "Data Analysis",
        "subtitle": "AI-powered insights from every transaction.",
        "overview": "Data Analysis is the intelligence layer on top of your Receipters Vault. Once your receipts are flowing in and securely stored, our analytics engine and AI Agent help you understand what's really happening in your business in real time. This is a premium add-on that activates advanced analytics features and AI-driven dashboards for merchants and, where relevant, consumers.",
        "keyCapabilities": [
            "Interactive Dashboards: Visualize sales, margins, category performance, and customer trends across outlets, time periods, and channels.",
            "AI Agent for Insights: Ask natural language questions like \"Which products have the highest margin this month?\" or \"Where are my discounts eroding profitability?\" and get clear answers, charts, and explanations.",
            "Segmentation and Behavior Analysis: See which customers buy what, when, and where and identify cross sell or loyalty opportunities.",
            "Anomaly and Fraud Detection: Spot unusual patterns in pricing, returns, voids, or discounts that may indicate errors or fraud.",
            "Reporting and Exports: Generate automated reports for management, investors, and regulators; export data to your BI tools or data warehouse if needed."
        ],
        "benefitsBusiness": [
            "Make informed decisions backed by real transaction data",
            "Optimize product assortments, pricing, and promotions",
            "Improve cash flow and margins through better visibility",
            "Reduce revenue leakage and shrinkage"
        ],
        "benefitsConsumer": [
            "Personal spending analytics across categories and merchants",
            "Budget tracking and alerts based on real purchase data",
            "Smarter recommendations and offers from participating merchants"
        ],
        "idealFor": "Data-driven retailers, multi-branch chains, hospitality groups, universities and institutions, and any business serious about leveraging transaction data for growth and efficiency."
    },
    "receipt-sharing": {
        "title": "Receipt Sharing",
        "subtitle": "Collaborate and share transaction records securely.",
        "overview": "Receipt Sharing allows users to securely share digital receipts with family, colleagues, or service providers. Whether it's for expense reimbursement, warranty claims, or shared household budgeting, Receipters makes it easy to provide proof of purchase without the hassle of physical paper.",
        "keyFeatures": [
            "Secure Link Sharing: Generate encrypted links to specific receipts that expire after a set time.",
            "Direct App Sharing: Send receipts directly to other Receipters users within the app.",
            "Export to PDF/CSV: Download receipts in professional formats for accounting or insurance purposes.",
            "Shared Folders: Create shared spaces for teams or families to collect and view receipts together."
        ],
        "benefitsBusiness": [
            "Simplified expense management for employees",
            "Faster processing of returns and warranty claims",
            "Improved collaboration between departments"
        ],
        "benefitsConsumer": [
            "Easy sharing for split bills or household expenses",
            "Quickly provide receipts to accountants or tax preparers",
            "Keep family members informed about shared purchases"
        ],
        "idealFor": "Families, small business teams, corporate employees, and anyone who needs to move transaction data between people securely."
    },
    "vendor-analytics-dashboard": {
        "title": "Vendor Analytics Dashboard",
        "subtitle": "Real-time visibility into your sales and customer behavior.",
        "overview": "The Vendor Analytics Dashboard provides merchants with a bird's-eye view of their entire operation. By aggregating data from all digital receipts, the dashboard reveals patterns that were previously hidden in paper records.",
        "keyFeatures": [
            "Real-Time Sales Tracking: Monitor revenue as it happens across all locations.",
            "Product Performance: Identify top-selling items and slow-moving stock.",
            "Customer Insights: Understand visit frequency, average spend, and peak shopping times.",
            "Outlet Comparison: Compare performance between different branches or regions.",
            "Exportable Reports: One-click generation of daily, weekly, or monthly performance summaries."
        ],
        "benefitsBusiness": [
            "Identify growth opportunities in real time",
            "Optimize staffing and inventory based on peak times",
            "Measure the success of promotions and loyalty programs",
            "Streamline financial reporting and reconciliation"
        ],
        "idealFor": "Store managers, business owners, and retail executives who need actionable data to run their businesses more effectively."
    }
}

# Flatten for common.json
flat_data = {}
for slug, data in features_data.items():
    prefix = f"features.{slug}.page"
    flat_data[f"{prefix}.title"] = data["title"]
    flat_data[f"{prefix}.subtitle"] = data["subtitle"]
    flat_data[f"{prefix}.overview.title"] = "Overview"
    flat_data[f"{prefix}.overview.content"] = data["overview"]
    
    if "keyFeatures" in data:
        flat_data[f"{prefix}.keyFeatures.title"] = "Key Features"
        for i, item in enumerate(data["keyFeatures"]):
            flat_data[f"{prefix}.keyFeatures.item{i+1}"] = item
            
    if "keyFeaturesMerchant" in data:
        flat_data[f"{prefix}.keyFeaturesMerchant.title"] = "Key Features (Merchant Mode)"
        for i, item in enumerate(data["keyFeaturesMerchant"]):
            flat_data[f"{prefix}.keyFeaturesMerchant.item{i+1}"] = item
            
    if "keyFeaturesConsumer" in data:
        flat_data[f"{prefix}.keyFeaturesConsumer.title"] = "Key Features (Consumer Mode)"
        for i, item in enumerate(data["keyFeaturesConsumer"]):
            flat_data[f"{prefix}.keyFeaturesConsumer.item{i+1}"] = item
            
    if "keyCapabilities" in data:
        flat_data[f"{prefix}.keyCapabilities.title"] = "Key Capabilities"
        for i, item in enumerate(data["keyCapabilities"]):
            flat_data[f"{prefix}.keyCapabilities.item{i+1}"] = item

    if "benefitsBusiness" in data:
        flat_data[f"{prefix}.benefitsBusiness.title"] = "Benefits for Businesses"
        for i, item in enumerate(data["benefitsBusiness"]):
            flat_data[f"{prefix}.benefitsBusiness.item{i+1}"] = item
            
    if "benefitsConsumer" in data:
        flat_data[f"{prefix}.benefitsConsumer.title"] = "Benefits for Consumers"
        for i, item in enumerate(data["benefitsConsumer"]):
            flat_data[f"{prefix}.benefitsConsumer.item{i+1}"] = item
            
    flat_data[f"{prefix}.idealFor.title"] = "Ideal For"
    flat_data[f"{prefix}.idealFor.content"] = data["idealFor"]

# Add generic keys
flat_data["features.page.goBack"] = "← Go Back"

# Update en/common.json
en_path = '/home/junior/Desktop/RECEIPTERS/landing page/receipters-website/public/locales/en/common.json'
with open(en_path, 'r') as f:
    en_json = json.load(f)

en_json.update(flat_data)

with open(en_path, 'w') as f:
    json.dump(en_json, f, indent=2, ensure_ascii=False)

print("Updated en/common.json with feature page content")
