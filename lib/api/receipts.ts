import { axiosInstance } from "@/lib/utils/axiosInstance";

/**
 * Receipt scope enum matching engine's ReceiptScope
 */
export type ReceiptScope = "MERCHANT" | "ZONE" | "BRANCH";

/**
 * Query parameters for scoped receipts APIs (merchant, zone, branch)
 */
export interface ReceiptsParams {
  id: string;
  q?: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  page?: number;
  size?: number;
}

/**
 * Query parameters for summary API
 */
export interface SummaryParams {
  userId: string;
  startDate: string;
  endDate: string;
}

/**
 * Query parameters for report API
 */
export interface ReportParams {
  userId: string;
  startDate: string;
  endDate: string;
}

/**
 * Query parameters for search API
 */
export interface SearchParams {
  userId: string;
  searchTerm: string;
}

/**
 * Summary response structure
 */
export interface ReceiptSummary {
  totalReceipts: number;
  totalAmount: number;
  currency: string;
  averageAmount: number;
}

/**
 * Receipt item structure
 */
export interface ReceiptItem {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  taxGroup?: string;
}

/**
 * Tax info structure
 */
export interface TaxInfo {
  id: number;
  taxType: string;
  taxRate: number;
  amount: number;
  taxAmount: number;
}

/**
 * Tax invoice details
 */
export interface TaxInvoiceDetails {
  cus?: string;
  cuin?: string;
  qrCode?: string;
}

/**
 * Payment entry from API
 */
export type PaymentMethodType = "CASH" | "CARD" | "MOBILE_MONEY" | "OTHER";

export interface ReceiptPayment {
  id: number;
  methodType: string;
  amount: number;
  currency: string;
  change?: number;
  sourceIdentifier?: string;
  displayLabel?: string;
  sortOrder?: number;
}

/**
 * Store/merchant info on receipt
 */
export interface ReceiptStore {
  name?: string;
  vatNo?: string;
  pinNo?: string;
}

/**
 * Branch info on receipt
 */
export interface ReceiptBranch {
  email?: string;
  phoneNumber?: string;
  address?: string;
}

/**
 * Category structure
 */
export interface Category {
  id: string;
  name: string;
  color: string;
}

/**
 * Receipt DTO from API
 */
export interface Receipt {
  id: string;
  receiptNo?: string;
  date: string;
  amount: number;
  subTotal?: number;
  currency: string;
  url?: string;
  buyerPin?: string;
  clientName?: string;
  posSoftware?: string;
  /** Top-level store/merchant footer fields (fallback when store/branch not nested) */
  vatNumber?: string;
  pinNumber?: string;
  email?: string;
  phone?: string;
  address?: string;
  store?: ReceiptStore;
  branch?: ReceiptBranch;
  paymentModes?: string[];
  payments?: ReceiptPayment[];
  items?: ReceiptItem[];
  taxInfo?: TaxInfo[];
  taxInvoiceDetails?: TaxInvoiceDetails;
  category?: Category;
  voided?: boolean;
  voidedReason?: string;
}

/**
 * Paginated response structure
 */
export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

/**
 * Get merchant receipts
 * @param params Query parameters including merchant ID and date range
 * @returns Paginated receipts
 */
export async function getMerchantReceipts(
  params: ReceiptsParams
): Promise<PaginatedResponse<Receipt>> {
  const response = await axiosInstance.get<PaginatedResponse<Receipt>>(
    "/receipts/merchant",
    {
      params: {
        id: params.id,
        q: params.q,
        startDate: params.startDate,
        endDate: params.endDate,
        page: params.page ?? 0,
        size: params.size ?? 5,
      },
    }
  );
  return response.data;
}

/**
 * Get zone receipts
 * @param params Query parameters including zone ID and date range
 * @returns Paginated receipts
 */
export async function getZoneReceipts(
  params: ReceiptsParams
): Promise<PaginatedResponse<Receipt>> {
  const response = await axiosInstance.get<PaginatedResponse<Receipt>>(
    "/receipts/zone",
    {
      params: {
        id: params.id,
        q: params.q,
        startDate: params.startDate,
        endDate: params.endDate,
        page: params.page ?? 0,
        size: params.size ?? 5,
      },
    }
  );
  return response.data;
}

/**
 * Get branch receipts
 * @param params Query parameters including branch ID and date range
 * @returns Paginated receipts
 */
export async function getBranchReceipts(
  params: ReceiptsParams
): Promise<PaginatedResponse<Receipt>> {
  const response = await axiosInstance.get<PaginatedResponse<Receipt>>(
    "/receipts/branch",
    {
      params: {
        id: params.id,
        q: params.q,
        startDate: params.startDate,
        endDate: params.endDate,
        page: params.page ?? 0,
        size: params.size ?? 5,
      },
    }
  );
  return response.data;
}

/**
 * Get receipt by ID
 * @param id Receipt UUID
 * @returns Receipt details
 */
export async function getReceiptById(id: string): Promise<Receipt> {
  const response = await axiosInstance.get<Receipt>(`/receipts/${id}`);
  return response.data;
}

/**
 * Delete receipt by ID
 * @param id Receipt UUID
 */
export async function deleteReceipt(id: string): Promise<void> {
  await axiosInstance.delete(`/receipts/${id}`);
}

/**
 * Get receipts summary
 * @param params Query parameters including userId and date range
 * @returns Receipt summary
 */
export async function getReceiptsSummary(
  params: SummaryParams
): Promise<ReceiptSummary> {
  const response = await axiosInstance.get<ReceiptSummary>("/receipts/summary", {
    params: {
      userId: params.userId,
      startDate: params.startDate,
      endDate: params.endDate,
    },
  });
  return response.data;
}

/**
 * Get receipts report
 * @param params Query parameters including userId and date range
 * @returns Receipt report data
 */
export async function getReceiptsReport(
  params: ReportParams
): Promise<Receipt[]> {
  const response = await axiosInstance.get<Receipt[]>("/receipts/report", {
    params: {
      userId: params.userId,
      startDate: params.startDate,
      endDate: params.endDate,
    },
  });
  return response.data;
}

/**
 * Search receipts
 * @param params Query parameters including userId and search term
 * @returns Matching receipts
 */
export async function searchReceipts(
  params: SearchParams
): Promise<Receipt[]> {
  const response = await axiosInstance.get<Receipt[]>("/receipts/search", {
    params: {
      userId: params.userId,
      searchTerm: params.searchTerm,
    },
  });
  return response.data;
}
