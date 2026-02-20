# Fund Intelligence Metrics - Knowledge Base

This document serves as a comprehensive knowledge base for all Fund Intelligence Metrics used in the Scalar Design System and related applications.

**Legend:** 🆕 = New / explicitly called out as new in this version · 🥇 = Priority / key metric

## Table of Contents

1. [Company General Fields](#company-general-fields)
2. [Measurement Date Specific Fields](#measurement-date-specific-fields)
3. [Fund Ownership](#fund-ownership)
4. [Breakpoint Analysis](#breakpoint-analysis)
5. [Cash Flows](#cash-flows)
6. [Financials](#financials)
7. [Balance Sheet](#balance-sheet)
8. [KPI](#kpi)
9. [Valuation/Allocation](#valuationallocation)
10. [GPC (Guideline Public Company)](#gpc-guideline-public-company)
11. [Transaction Comps](#transaction-comps)
12. [Backsolve](#backsolve)
13. [External Value](#external-value)
14. [DCF (Discounted Cash Flow)](#dcf-discounted-cash-flow)
15. [Specified Share Value](#specified-share-value)
16. [Calibration](#calibration)
17. [Documents & Process Management](#documents--process-management)
18. [Metrics List (Quick Reference)](#metrics-list-quick-reference)
19. [Reconciliation with Previous Version](#reconciliation-with-previous-version)

---

## Metrics List (Quick Reference)

Compact list of all metrics. 🆕 = New in this version; 🥇 = Priority/key metric.

### Company General Fields

- Company Name
- Fund(s)
- 🆕 Cap Table Currency
- 🆕 Financials Currency
- 🆕 Fiscal Year End
- 🆕 Website
- 🆕 Legal Company Name
- **To add in coming features:** Firm's Categorization (tag), Industry, Capital IQ ID, Capital IQ Description, Notice.co/Zanbato some other Private Company ID, More Market Intelligence Data…, Some way to start relating the same port co across firms

### Measurement Date Specific Fields

- Valuation Date (company measurement date)
- Cap Table
  - 🆕 Cap Table Version Name
  - 🆕 Cap Table Currency
  - 🆕 Total Outstanding Shares (#)
  - 🆕 Total Fully Diluted Shares (#)
  - 🆕 Initial Investment Date (📅) first investment date from any preferred security
  - 🆕 Total number of preferred rounds
  - 🆕 Most Recent Investment Date (📅) last investment date from any preferred security
  - 🆕 Total Options (#)
  - 🆕 Average Option Strike Price ($)
  - 🆕 Percent Option Pool of total fully diluted shares (%)
  - 🆕 Total Warrants (#)
  - 🆕 Average Warrant Strike Price ($)
  - 🆕 Total Unissued Options (#)
  - 🆕 Total Common Shares (#)
  - 🆕 Total Outstanding Preferred Shares (#)
  - 🆕 Total Fully Diluted Preferred Shares (#)
  - 🆕 Total Raised
  - 🆕 Total Initial Liquidation Preference ($)
  - 🆕 Total Preference (with Dividends) ($) as of the measurement date
  - 🆕 Initial Note Issuance Date
  - 🆕 Initial Note Conversion Model (preferred, common, loan)
  - 🆕 Initial Note Conversion Price/Share ($)
  - 🆕 Initial Note Expected Shares (#)
  - 🆕 Total Note Expected Shares (#)

### Fund Ownership

(Can be grouped by fund, company, or individual investment)

- Initial Investment (📅)
- Most Recent Investment (📅)
- Fully Diluted Ownership (%)
- 🆕 Outstanding Ownership (%) 🥇
- Invested Capital ($)
- Shares (#)
- CSE Shares (#)
- 🆕 Security ID 🥇
- 🆕 Cash Distributions ($) 🥇
- 🆕 Proceeds from Shares Sold ($) 🥇
- 🆕 Loan Value ($) 🥇

### Breakpoint Analysis

- 🆕 Uses Custom Breakpoints (bool)
- 🆕 Highest Breakpoint Price per Common Share ($)
- 🆕 Highest Breakpoint limit ($)

### Cash Flows

- Gross IRR (%) xirr(cash_flows)
- 🆕 Net Cash Flows ($)
- Total Other Capital Costs ($) — everything manually entered in cash flows page

### Financials (all 🆕)

- Financials Date (date)
- LTM Date
- NTM Date
- Balance Sheet As Of Date
- LTM or NTM
- Total Revenue ($), Total Cost of Sales ($), Gross Profit ($), Operating Expenses ($), EBITDA ($), Adjusted EBITDA ($), Depreciation Expense ($), Amortization Expense ($), EBIT ($), Interest Expense ($), Other Expense ($), Pretax Income ($), Income Taxes ($), Net Income ($)
- Revenue Growth Rate (%), Cost of Sales (%), Gross Margin (%), Operating % of Sales (%), EBITDA Margin (%), Adjusted EBITDA Margin (%), Net Profit Margin (%)

### Balance Sheet As of (all $) - LTM

- Cash and Equivalents, Accounts Receivables, Inventory, Other Current Assets, Total Current Assets
- PPE, Intangibles, Other Long Term Assets, Total Long Term Assets, Total Assets
- Short Term Debt, Accounts Payable, Accrued Liabilities, Deferred Revenue, Other Current Liabilities, Total Current Liabilities
- Long Term Debt, Other Long Term Debt, Total Long Term Debt, Total Liabilities
- Equity, Total Liabilities and Equity
- **All other Financial Periods** (historical or projection): all financial values, fiscal period, fiscal period end date

### KPI

For all financial periods, LTM, and NTM: **(metric name) #, % or $**

### Valuation/Allocation

- Valuation Status (draft, published, final)
- Realized Value ($), Unrealized Value ($), Total Value ($) — unrealized_value + realized_value (Current Fund Value)
- MOIC (x) — total_value / invested_capital
- Enterprise Value 🥇, Equity Value 🥇, Breakeven Equity Exit Value 🥇
- Valuation Methods (BV, PC, GT, etc) 🥇
- Allocation Methods (CSE, Waterfall, OPM, Backsolve, Future Exit, SSV) 🥇
- 🆕 Implied EV/LTM Revenue Multiple (x) — enterprise_value / ltm_revenue 🥇
- 🆕 Implied EV/LTM EBITDA Multiple (x) — enterprise_value / ltm_ebitda 🥇
- 🆕 Implied EV/NTM Multiple (x) — enterprise_value / ntm_revenue 🥇
- 🆕 Implied EV/NTM EBITDA Multiple (x) — enterprise_value / ntm_ebitda 🥇
- 🆕 Implied EV/(KPI Metric) Multiple (x) — enterprise_value / kpi_metric 🥇
- **Allocation Scenarios:** Scenario type (, )

### GPC (all 🆕)

- Use Multiple Premium Discount (bool), Use Equity Value (bool), Use Calculated Forward Multiple (bool)
- First Multiple Type (LTM, NTM or period year), Second Multiple Type (LTM, NTM or period year)
- LTM Revenue Applied Multiple (x), LTM EBITDA Applied Multiple (x), NTM Revenue Applied Multiple (x), NTM EBITDA Applied Multiple (x), Weighted Applied Multiple (x)
- LTM Revenue Multiple Premium Discount (x), LTM EBITDA Multiple Premium Discount (x), NTM Revenue Multiple Premium Discount (x), NTM EBITDA Multiple Premium Discount (x), Weighted Multiple Premium Discount (x)
- Weighted Enterprise Value ($), Weighed Equity Value ($)
- **All tickers:** Percentile Ranking (%), LTM Revenue, LTM Revenue Growth, NTM Revenue, NTM Revenue Growth, LTM EBITDA, NTM EBITDA, Gross Margin, EBITDA Margin, Tangible Book Value, Net Income, Selected 1/2/5 year volatility (median, mean, etc), 1/2/5 year volatility (%)

### Transaction Comps

- LTM Revenue Applied Multiple (x), LTM EBITDA Applied Multiple (x), NTM Revenue Applied Multiple (x), NTM EBITDA Applied Multiple (x), Weighted Applied Multiple (x)
- Weighted Enterprise Value ($), Weighed Equity Value ($)
- Percentile Ranking (%), LTM Revenue, LTM Revenue Growth, NTM Revenue, NTM Revenue Growth, LTM EBITDA, NTM EBITDA, Gross Margin, EBITDA Margin

### Backsolve (all 🆕)

- Allocation Methods (CSE, Waterfall, OPM)
- Security Names (Series A, Series B), Target Total Shares (#), Target Total Value ($)
- OPM Backsolve Date, OPM Volatility Selected (%), OPM Maturity (#), OPM Maturity Date, OPM Risk Free Rate (%)
- Implied Equity Value, Enterprise Value
- Uses Market Adjustment (bool), Market Adjustment As Of Date, Metric Basis for Adjustment (Market Cap, Enterprise Value, etc), Market Adjustment (%), Adjusted Value (Equity Value or Enterprise Value), Adjusted Enterprise Value ($), Adjusted Equity Value ($)

### External Value (all 🆕)

- Equity Value, Enterprise Value

### DCF (all 🆕)

- WACC (%), Effective Tax Rate (%)
- Summed Present Value of Discrete Period Cash Flows ($), Present Value of Terminal Value ($), Present Value of NOL Carryforwards ($), Enterprise Value ($)

### Specified Share Value (all 🆕)

- Equity Value ($), Enterprise Value ($)

### Calibration (all 🆕)

- LTM Revenue Multiple, NTM Revenue Multiple, LTM Revenue Multiple Percentile, NTM Revenue Multiple Percentile, Multiple Type, LTM Revenue Multiple Premium, NTM Revenue Multiple Premium
- LTM EBITDA Multiple, NTM EBITDA Multiple, LTM EBITDA Multiple Percentile, NTM EBITDA Multiple Percentile, Multiple Type, LTM EBITDA Multiple Premium, NTM EBITDA Multiple Premium

### Documents & Process Management (all 🆕)

- Total Number of documents (#)
- Number of documents referenced (#)
- Number of pending document requests (#)
- Number of pending questions (#)

---

## Company General Fields

General company information fields that are not date-specific.

### Fields

- **Company Name** - The name of the company
- **Fund(s)** - Associated fund(s)
- **Cap Table Currency** - Currency used for cap table calculations
- **Financials Currency** - Currency used for financial reporting
- **Fiscal Year End** - End date of the company's fiscal year
- **Website** - Company website URL
- **Legal Company Name** - Official legal name of the company

### To Add in Coming Features

- **Firm's Categorization (tag)** - Categorization or tagging system for firms
- **Industry** - Industry classification
- **Capital IQ ID** - Capital IQ identifier
- **Capital IQ Description** - Description from Capital IQ
- **Notice.co/Zanbato** - Private company ID from Notice.co or Zanbato
- **Some other Private Company ID** - Additional private company identifiers
- **More Market Intelligence Data** - Additional market intelligence information
- **Some way to start relating the same port co across firms** - Cross-firm portfolio company relationships

---

## Measurement Date Specific Fields

Fields that are specific to a particular measurement date.

### Cap Table Fields

- **Valuation Date (company measurement date)** - Date of the valuation measurement
- **Cap Table Version Name** - Name/version identifier for the cap table
- **Cap Table Currency** - Currency used for the cap table
- **Total Outstanding Shares (#)** - Total number of outstanding shares
- **Total Fully Diluted Shares (#)** - Total number of fully diluted shares

### Investment Information

- **Initial Investment Date** - First investment date from any preferred security
- **Total number of preferred rounds** - Count of preferred funding rounds
- **Most Recent Investment Date** - Last investment date from any preferred security

### Options & Warrants

- **Total Options (#)** - Total number of options
- **Average Option Strike Price ($)** - Average strike price for options
- **Percent Option Pool of total fully diluted shares (%)** - Percentage of option pool relative to fully diluted shares
- **Total Warrants (#)** - Total number of warrants
- **Average Warrant Strike Price ($)** - Average strike price for warrants
- **Total Unissued Options (#)** - Total number of unissued options

### Share Breakdown

- **Total Common Shares (#)** - Total number of common shares
- **Total Outstanding Preferred Shares (#)** - Total number of outstanding preferred shares
- **Total Fully Diluted Preferred Shares (#)** - Total number of fully diluted preferred shares

### Capital & Notes

- **Total Raised** - Total capital raised
- **Total Initial Liquidation Preference ($)** - Initial liquidation preference amount
- **Total Preference (with Dividends) ($)** - Total preference including dividends as of measurement date
- **Initial Note Issuance Date** - Date when initial notes were issued
- **Initial Note Conversion Model** - Conversion model (preferred, common, loan)
- **Initial Note Conversion Price/Share ($)** - Conversion price per share for initial notes
- **Initial Note Expected Shares (#)** - Expected shares from initial note conversion
- **Total Note Expected Shares (#)** - Total expected shares from all notes

---

## Fund Ownership

Fund ownership can be grouped by fund, company, or individual investment.

### Fields

- **Initial Investment** - Date of initial investment
- **Most Recent Investment** - Date of most recent investment
- **Fully Diluted Ownership (%)** - Percentage ownership on fully diluted basis
- **Outstanding Ownership (%)** - Percentage ownership on outstanding basis
- **Invested Capital ($)** - Total capital invested
- **Shares (#)** - Number of shares held
- **CSE Shares (#)** - Common Stock Equivalent shares
- **Security ID** - Identifier for the security
- **Cash Distributions ($)** - Cash distributions received
- **Proceeds from Shares Sold ($)** - Proceeds from sale of shares
- **Loan Value ($)** - Value of loans

---

## Breakpoint Analysis

Analysis of breakpoints in the valuation structure.

### Fields

- **Uses Custom Breakpoints (bool)** - Whether custom breakpoints are used
- **Highest Breakpoint Price per Common Share ($)** - Highest breakpoint price
- **Highest Breakpoint limit ($)** - Highest breakpoint limit

---

## Cash Flows

Cash flow analysis and metrics.

### Fields

- **Gross IRR (%)** - Gross Internal Rate of Return calculated using `xirr(cash_flows)`
- **Net Cash Flows ($)** - Net cash flows
- **Total Other Capital Costs ($)** - All manually entered costs from cash flows page

---

## Financials

Financial metrics and data points.

### Date Fields

- **Financials Date (date)** - Date of financial data
- **LTM Date** - Last Twelve Months date
- **NTM Date** - Next Twelve Months date
- **Balance Sheet As Of Date** - Balance sheet date
- **LTM or NTM** - Indicates whether data is LTM or NTM

### Income Statement Fields

- **Total Revenue ($)** - Total revenue
- **Total Cost of Sales ($)** - Total cost of sales
- **Gross Profit ($)** - Gross profit
- **Operating Expenses ($)** - Operating expenses
- **EBITDA ($)** - Earnings Before Interest, Taxes, Depreciation, and Amortization
- **Adjusted EBITDA ($)** - Adjusted EBITDA
- **Depreciation Expense ($)** - Depreciation expense
- **Amortization Expense ($)** - Amortization expense
- **EBIT ($)** - Earnings Before Interest and Taxes
- **Interest Expense ($)** - Interest expense
- **Other Expense ($)** - Other expenses
- **Pretax Income ($)** - Pretax income
- **Income Taxes ($)** - Income taxes
- **Net Income ($)** - Net income

### Margin & Growth Metrics

- **Revenue Growth Rate (%)** - Revenue growth rate
- **Cost of Sales (%)** - Cost of sales as percentage
- **Gross Margin (%)** - Gross margin percentage
- **Operating % of Sales (%)** - Operating expenses as percentage of sales
- **EBITDA Margin (%)** - EBITDA margin
- **Adjusted EBITDA Margin (%)** - Adjusted EBITDA margin
- **Net Profit Margin (%)** - Net profit margin

---

## Balance Sheet

Balance sheet items (all in $) - LTM.

### Assets

- **Cash and Equivalents** - Cash and cash equivalents
- **Accounts Receivables** - Accounts receivable
- **Inventory** - Inventory value
- **Other Current Assets** - Other current assets
- **Total Current Assets** - Sum of all current assets
- **PPE** - Property, Plant, and Equipment
- **Intangibles** - Intangible assets
- **Other Long Term Assets** - Other long-term assets
- **Total Long Term Assets** - Sum of all long-term assets
- **Total Assets** - Total assets

### Liabilities

- **Short Term Debt** - Short-term debt
- **Accounts Payable** - Accounts payable
- **Accrued Liabilities** - Accrued liabilities
- **Deferred Revenue** - Deferred revenue
- **Other Current Liabilities** - Other current liabilities
- **Total Current Liabilities** - Sum of all current liabilities
- **Long Term Debt** - Long-term debt
- **Other Long Term Debt** - Other long-term debt
- **Total Long Term Debt** - Sum of all long-term debt
- **Total Liabilities** - Total liabilities

### Equity

- **Equity** - Total equity
- **Total Liabilities and Equity** - Sum of liabilities and equity

### Other Financial Periods

- **All other Financial Periods** - Historical or projection periods
- **All financial values** - All financial metric values
- **Fiscal period** - Fiscal period identifier
- **Fiscal period end date** - End date of fiscal period

---

## KPI

Key Performance Indicators for all financial periods, LTM, and NTM.

### Format

- **(metric name) #, % or $** - KPI metrics can be expressed as:
  - Number (#)
  - Percentage (%)
  - Currency ($)

---

## Valuation/Allocation

Valuation and allocation methods and metrics.

### Status & Value

- **Valuation Status** - Status: draft, published, or final
- **Realized Value ($)** - Realized value
- **Unrealized Value ($)** - Unrealized value
- **Total Value ($)** - Total value (unrealized_value + realized_value), also known as Current Fund Value
- **MOIC (x)** - Multiple on Invested Capital (total_value / invested_capital)

### Valuation Metrics

- **Enterprise Value** - Enterprise value
- **Equity Value** - Equity value
- **Breakeven Equity Exit Value** - Breakeven equity exit value

### Methods

- **Valuation Methods** - Methods: BV (Book Value), PC (Price Comparison), GT (Guideline Transaction), etc.
- **Allocation Methods** - Methods: CSE (Common Stock Equivalent), Waterfall, OPM (Option Pricing Model)

### Implied Multiples

- **Implied EV/LTM Revenue Multiple (x)** - enterprise_value / ltm_revenue
- **Implied EV/LTM EBITDA Multiple (x)** - enterprise_value / ltm_ebitda
- **Implied EV/NTM Multiple (x)** - enterprise_value / ntm_revenue
- **Implied EV/NTM EBITDA Multiple (x)** - enterprise_value / ntm_ebitda
- **Implied EV/(KPI Metric) Multiple (x)** - enterprise_value / kpi_metric

---

## GPC (Guideline Public Company)

Guideline Public Company valuation methodology.

### Configuration

- **Use Multiple Premium Discount (bool)** - Whether to use multiple premium/discount
- **Use Equity Value (bool)** - Whether to use equity value
- **Use Calculated Forward Multiple (bool)** - Whether to use calculated forward multiple
- **First Multiple Type** - Type: LTM, NTM, or period year
- **Second Multiple Type** - Type: LTM, NTM, or period year

### Applied Multiples

- **LTM Revenue Applied Multiple (x)** - Applied LTM revenue multiple
- **LTM EBITDA Applied Multiple (x)** - Applied LTM EBITDA multiple
- **NTM Revenue Applied Multiple (x)** - Applied NTM revenue multiple
- **NTM EBITDA Applied Multiple (x)** - Applied NTM EBITDA multiple
- **Weighted Applied Multiple (x)** - Weighted applied multiple

### Premium/Discount

- **LTM Revenue Multiple Premium Discount (x)** - Premium/discount for LTM revenue multiple
- **LTM EBITDA Multiple Premium Discount (x)** - Premium/discount for LTM EBITDA multiple
- **NTM Revenue Multiple Premium Discount (x)** - Premium/discount for NTM revenue multiple
- **NTM EBITDA Multiple Premium Discount (x)** - Premium/discount for NTM EBITDA multiple
- **Weighted Multiple Premium Discount (x)** - Weighted premium/discount

### Values

- **Weighted Enterprise Value ($)** - Weighted enterprise value
- **Weighed Equity Value ($)** - Weighted equity value

### All Tickers

- **Percentile Ranking (%)** - Percentile ranking
- **LTM Revenue** - LTM revenue
- **LTM Revenue Growth** - LTM revenue growth
- **NTM Revenue** - NTM revenue
- **NTM Revenue Growth** - NTM revenue growth
- **LTM EBITDA** - LTM EBITDA
- **NTM EBITDA** - NTM EBITDA
- **Gross Margin** - Gross margin
- **EBITDA Margin** - EBITDA margin
- **Tangible Book Value** - Tangible book value
- **Net Income** - Net income
- **Selected 1 year volatility (median, mean, etc)** - Selected 1-year volatility metric
- **1 year volatility (%)** - 1-year volatility percentage
- **Selected 2 year volatility (median, mean, etc)** - Selected 2-year volatility metric
- **2 year volatility (%)** - 2-year volatility percentage
- **Selected 5 year volatility (median, mean, etc)** - Selected 5-year volatility metric
- **5 year volatility (%)** - 5-year volatility percentage

---

## Transaction Comps

Transaction comparables analysis.

### Multiples

- **LTM Revenue Applied Multiple (x)** - Applied LTM revenue multiple
- **LTM EBITDA Applied Multiple (x)** - Applied LTM EBITDA multiple
- **NTM Revenue Applied Multiple (x)** - Applied NTM revenue multiple
- **NTM EBITDA Applied Multiple (x)** - Applied NTM EBITDA multiple
- **Weighted Applied Multiple (x)** - Weighted applied multiple

### Values

- **Weighted Enterprise Value ($)** - Weighted enterprise value
- **Weighed Equity Value ($)** - Weighted equity value

### Percentile Rankings

- **Percentile Ranking (%)** - Percentile ranking
- **LTM Revenue** - LTM revenue
- **LTM Revenue Growth** - LTM revenue growth
- **NTM Revenue** - NTM revenue
- **NTM Revenue Growth** - NTM revenue growth
- **LTM EBITDA** - LTM EBITDA
- **NTM EBITDA** - NTM EBITDA
- **Gross Margin** - Gross margin
- **EBITDA Margin** - EBITDA margin

---

## Backsolve

Backsolve valuation methodology.

### Configuration

- **Allocation Methods** - Methods: CSE (Common Stock Equivalent), Waterfall, OPM (Option Pricing Model)
- **Security Names** - Names of securities (e.g., Series A, Series B)
- **Target Total Shares (#)** - Target total shares
- **Target Total Value ($)** - Target total value

### OPM Parameters

- **OPM Backsolve Date** - Backsolve date for OPM
- **OPM Volatility Selected (%)** - Selected volatility percentage
- **OPM Maturity (#)** - Maturity period
- **OPM Maturity Date** - Maturity date
- **OPM Risk Free Rate (%)** - Risk-free rate percentage

### Values

- **Implied Equity Value** - Implied equity value
- **Enterprise Value** - Enterprise value

### Market Adjustment

- **Uses Market Adjustment (bool)** - Whether market adjustment is used
- **Market Adjustment As Of Date** - Date of market adjustment
- **Metric Basis for Adjustment** - Basis: Market Cap, Enterprise Value, etc.
- **Market Adjustment (%)** - Market adjustment percentage
- **Adjusted Value** - Adjusted value (Equity Value or Enterprise Value)
- **Adjusted Enterprise Value ($)** - Adjusted enterprise value
- **Adjusted Equity Value ($)** - Adjusted equity value

---

## External Value

External valuation inputs.

### Fields

- **Equity Value** - External equity value
- **Enterprise Value** - External enterprise value

---

## DCF (Discounted Cash Flow)

Discounted Cash Flow valuation methodology.

### Parameters

- **WACC (%)** - Weighted Average Cost of Capital percentage
- **Effective Tax Rate (%)** - Effective tax rate percentage

### Values

- **Summed Present Value of Discrete Period Cash Flows ($)** - Sum of PV of discrete period cash flows
- **Present Value of Terminal Value ($)** - PV of terminal value
- **Present Value of NOL Carryforwards ($)** - PV of NOL carryforwards
- **Enterprise Value ($)** - Enterprise value from DCF

---

## Specified Share Value

Specified share value inputs.

### Fields

- **Equity Value ($)** - Specified equity value
- **Enterprise Value ($)** - Specified enterprise value

---

## Calibration

Calibration metrics for valuation methods.

### Revenue Multiples

- **LTM Revenue Multiple** - LTM revenue multiple
- **NTM Revenue Multiple** - NTM revenue multiple
- **LTM Revenue Multiple Percentile** - LTM revenue multiple percentile
- **NTM Revenue Multiple Percentile** - NTM revenue multiple percentile
- **Multiple Type** - Type of multiple
- **LTM Revenue Multiple Premium** - LTM revenue multiple premium
- **NTM Revenue Multiple Premium** - NTM revenue multiple premium

### EBITDA Multiples

- **LTM EBITDA Multiple** - LTM EBITDA multiple
- **NTM EBITDA Multiple** - NTM EBITDA multiple
- **LTM EBITDA Multiple Percentile** - LTM EBITDA multiple percentile
- **NTM EBITDA Multiple Percentile** - NTM EBITDA multiple percentile
- **Multiple Type** - Type of multiple
- **LTM EBITDA Multiple Premium** - LTM EBITDA multiple premium
- **NTM EBITDA Multiple Premium** - NTM EBITDA multiple premium

---

## Documents & Process Management

Document and process management metrics.

### Fields

- **Total Number of documents (#)** - Total document count
- **Number of documents referenced (#)** - Number of referenced documents
- **Number of pending document requests (#)** - Number of pending document requests
- **Number of pending questions (#)** - Number of pending questions

---

## Reconciliation with Previous Version

This section summarizes how the metrics list above aligns with the previous (narrative) version of this knowledge base.

| Area | Match | Notes |
|------|--------|------|
| **Company General Fields** | ✅ | Previous version already had Cap Table Currency, Financials Currency, Fiscal Year End, Website, Legal Company Name; "To add in coming features" list matches (Firm's Categorization, Industry, Capital IQ ID, etc.). |
| **Measurement Date / Cap Table** | ✅ | All listed fields (Cap Table Version Name, Total Outstanding/Fully Diluted Shares, Initial/Most Recent Investment Date, Options, Warrants, Notes, etc.) were already present in the narrative; 🆕 in the list denotes emphasis for this version. |
| **Fund Ownership** | ✅ | Outstanding Ownership (%), Security ID, Cash Distributions ($), Proceeds from Shares Sold ($), Loan Value ($) were already in the narrative; marked 🆕/🥇 in the list. |
| **Breakpoint Analysis** | ✅ | Uses Custom Breakpoints, Highest Breakpoint Price per Common Share, Highest Breakpoint limit — all present. |
| **Cash Flows** | ✅ | Gross IRR, Net Cash Flows, Total Other Capital Costs — all present. |
| **Financials** | ✅ | Date fields, Income Statement, Margins, Balance Sheet (LTM), other periods — full set matches. |
| **KPI** | ✅ | Same convention: (metric name) #, % or $. |
| **Valuation/Allocation** | ✅ | Status, Realized/Unrealized/Total Value, MOIC, Enterprise Value, Equity Value, Breakeven, Valuation/Allocation Methods match. Implied EV multiples (LTM/NTM Revenue, EBITDA, KPI) and Allocation Scenarios (Scenario type) added explicitly in list. |
| **GPC** | ✅ | All configuration, applied multiples, premium/discount, values, and ticker metrics (including volatility) match. |
| **Transaction Comps** | ✅ | Multiples, values, percentile rankings match. |
| **Backsolve** | ✅ | Allocation Methods, Security Names, Target Shares/Value, OPM parameters, Market Adjustment, Adjusted Values — all match. |
| **External Value** | ✅ | Equity Value, Enterprise Value — match. |
| **DCF** | ✅ | WACC, Effective Tax Rate, PV of cash flows/terminal value/NOL, Enterprise Value — match. |
| **Specified Share Value** | ✅ | Equity Value ($), Enterprise Value ($) — match. |
| **Calibration** | ✅ | Revenue and EBITDA multiple fields (LTM/NTM, Percentile, Premium) — match. |
| **Documents & Process Management** | ✅ | Total documents, referenced, pending requests, pending questions — match. |

**Summary:** The metrics list matches the previous version. The 🆕 and 🥇 markers in the quick-reference list highlight new or priority emphasis for this version; the underlying field set is consistent with the narrative sections.

---

## Usage in Design System

This knowledge base should be referenced when:

1. **Creating Components** - Use these field definitions to ensure components display the correct data types and formats
2. **Building Forms** - Reference field types and validation requirements
3. **Data Tables** - Use field names and descriptions for column headers and tooltips
4. **API Integration** - Reference field names when mapping API responses
5. **Documentation** - Use as a reference for developers and users

## Field Type Conventions

- **($)** - Currency/Dollar amount
- **(#)** - Number/Count
- **(%)** - Percentage
- **(bool)** - Boolean (true/false)
- **(date)** - Date value
- **(x)** - Multiple/ratio

---

*Last Updated: 2025-02-18*
*Version: 1.1.0*
