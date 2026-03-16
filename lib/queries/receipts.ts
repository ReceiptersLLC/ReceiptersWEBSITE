"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getMerchantReceipts,
  getZoneReceipts,
  getBranchReceipts,
  getReceiptById,
  deleteReceipt,
  getReceiptsSummary,
  getReceiptsReport,
  searchReceipts,
  type ReceiptsParams,
  type SummaryParams,
  type ReportParams,
  type SearchParams,
  type PaginatedResponse,
  type Receipt,
  type ReceiptSummary,
} from "@/lib/api/receipts";

/**
 * Query key factory for receipts
 */
export const receiptsKeys = {
  all: ["receipts"] as const,
  merchant: (params: ReceiptsParams) =>
    [...receiptsKeys.all, "merchant", params] as const,
  zone: (params: ReceiptsParams) =>
    [...receiptsKeys.all, "zone", params] as const,
  branch: (params: ReceiptsParams) =>
    [...receiptsKeys.all, "branch", params] as const,
  detail: (id: string) => [...receiptsKeys.all, "detail", id] as const,
  summary: (params: SummaryParams) =>
    [...receiptsKeys.all, "summary", params] as const,
  report: (params: ReportParams) =>
    [...receiptsKeys.all, "report", params] as const,
  search: (params: SearchParams) =>
    [...receiptsKeys.all, "search", params] as const,
};

/**
 * Hook to fetch merchant receipts
 * @param params Query parameters including merchant ID and date range
 * @param enabled Whether the query should run
 */
export function useGetMerchantReceipts(
  params: ReceiptsParams,
  enabled: boolean = true
) {
  return useQuery<PaginatedResponse<Receipt>>({
    queryKey: receiptsKeys.merchant(params),
    queryFn: () => getMerchantReceipts(params),
    enabled: enabled && !!params.id && !!params.startDate && !!params.endDate,
  });
}

/**
 * Hook to fetch zone receipts
 * @param params Query parameters including zone ID and date range
 * @param enabled Whether the query should run
 */
export function useGetZoneReceipts(
  params: ReceiptsParams,
  enabled: boolean = true
) {
  return useQuery<PaginatedResponse<Receipt>>({
    queryKey: receiptsKeys.zone(params),
    queryFn: () => getZoneReceipts(params),
    enabled: enabled && !!params.id && !!params.startDate && !!params.endDate,
  });
}

/**
 * Hook to fetch branch receipts
 * @param params Query parameters including branch ID and date range
 * @param enabled Whether the query should run
 */
export function useGetBranchReceipts(
  params: ReceiptsParams,
  enabled: boolean = true
) {
  return useQuery<PaginatedResponse<Receipt>>({
    queryKey: receiptsKeys.branch(params),
    queryFn: () => getBranchReceipts(params),
    enabled: enabled && !!params.id && !!params.startDate && !!params.endDate,
  });
}

/**
 * Hook to fetch receipt by ID
 * @param id Receipt UUID
 * @param enabled Whether the query should run
 */
export function useGetReceiptById(id: string, enabled: boolean = true) {
  return useQuery<Receipt>({
    queryKey: receiptsKeys.detail(id),
    queryFn: () => getReceiptById(id),
    enabled: enabled && !!id,
  });
}

/**
 * Hook to delete receipt by ID
 * @returns Mutation for deleting a receipt
 */
export function useDeleteReceipt() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => deleteReceipt(id),
    onSuccess: () => {
      // Invalidate all receipt queries to refetch data
      queryClient.invalidateQueries({ queryKey: receiptsKeys.all });
    },
  });
}

/**
 * Hook to fetch receipts summary
 * @param params Query parameters including userId and date range
 * @param enabled Whether the query should run
 */
export function useGetReceiptsSummary(
  params: SummaryParams,
  enabled: boolean = true
) {
  return useQuery<ReceiptSummary>({
    queryKey: receiptsKeys.summary(params),
    queryFn: () => getReceiptsSummary(params),
    enabled: enabled && !!params.userId && !!params.startDate && !!params.endDate,
  });
}

/**
 * Hook to fetch receipts report
 * @param params Query parameters including userId and date range
 * @param enabled Whether the query should run
 */
export function useGetReceiptsReport(
  params: ReportParams,
  enabled: boolean = true
) {
  return useQuery<Receipt[]>({
    queryKey: receiptsKeys.report(params),
    queryFn: () => getReceiptsReport(params),
    enabled: enabled && !!params.userId && !!params.startDate && !!params.endDate,
  });
}

/**
 * Hook to search receipts
 * @param params Query parameters including userId and search term
 * @param enabled Whether the query should run
 */
export function useSearchReceipts(
  params: SearchParams,
  enabled: boolean = true
) {
  return useQuery<Receipt[]>({
    queryKey: receiptsKeys.search(params),
    queryFn: () => searchReceipts(params),
    enabled: enabled && !!params.userId && !!params.searchTerm,
  });
}
