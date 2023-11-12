// Maintain the list of all workers here so we're not using
// string references all over the place.
export const Queues = {
  refreshCorporateActions: "refreshCorporateActions",
  refreshFundList: "refreshFundList",
  refreshHistoricalPricing: "refreshHistoricalPricing",
  refreshListedAssets: "refreshListedAssets",
  syncAccountActivities: "syncAccountActivities",
  refreshFundHoldings: "refreshFundHoldings",
  autoSliceLiquidation: "autoSliceLiquidation",
  refreshShariahStatus: "refreshShariahStatus",
  recurringInvestment: "recurringInvestment",
  executePortfolioOrders: "executePortfolioOrders",
  reinvestOnSell: "reinvestOnSell",
} as const;