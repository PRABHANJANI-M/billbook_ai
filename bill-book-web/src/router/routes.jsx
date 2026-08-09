import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

//Login
import Login from '../pages/Auth/Login'
import ProtectedRoute from '../components/auth/ProtectedRoute'

// Dashboard
import Dashboard from '../pages/Dashboard/Dashboard'

// POS
import POSTerminal from '../pages/POS/POSTerminal'

// Products
import AllProducts from '../pages/Products/AllProducts'
import AddProduct from '../pages/Products/AddProduct'
import Categories from '../pages/Products/Categories'
import Brands from '../pages/Products/Brands'
import Units from '../pages/Products/Units'
import Manufacturers from '../pages/Products/Manufacturers'
import ImportCSV from '../pages/Products/ImportCSV'
import BarcodeLabels from '../pages/Products/BarcodeLabels'

// Stock
import OpeningStock from '../pages/Stock/OpeningStock'
import Adjustments from '../pages/Stock/Adjustments'
import Transfers from '../pages/Stock/Transfers'

// Sales
import SalesOrders from '../pages/Sales/SalesOrders'
import NewSalesOrder from '../pages/Sales/NewSalesOrder'
import AllInvoices from '../pages/Sales/AllInvoices'
import NewInvoice from '../pages/Sales/NewInvoice'
import SaleReturns from '../pages/Sales/SaleReturns'
import Discounts from '../pages/Sales/Discounts'
import DeliveryChallans from '../pages/Sales/DeliveryChallans'
import NewChallan from '../pages/Sales/NewChallan'
import DCReturns from '../pages/Sales/DCReturns'
import ReceivePayments from '../pages/Sales/ReceivePayments'

// Purchases
import PurchaseOrders from '../pages/Purchases/PurchaseOrders'
import NewPO from '../pages/Purchases/NewPO'
import AllPurchases from '../pages/Purchases/AllPurchases'
import NewPurchase from '../pages/Purchases/NewPurchase'
import PurchaseReturns from '../pages/Purchases/PurchaseReturns'
import PaySuppliers from '../pages/Purchases/PaySuppliers'

// Expenses / Contacts / Staff
import Expenses from '../pages/Expenses/Expenses'
import Contacts from '../pages/Contacts/Contacts'
import StaffHR from '../pages/Staff/StaffHR'

// GST & Tax
import GSTR1 from '../pages/GSTTax/GSTR1'
import GSTR3B from '../pages/GSTTax/GSTR3B'
import TaxProfiles from '../pages/GSTTax/TaxProfiles'
import TDSTCS from '../pages/GSTTax/TDSTCS'
import GSTINLookup from '../pages/GSTTax/GSTINLookup'

// Accounting
import Accounting from '../pages/Accounting/Accounting'
import BankAccounts from '../pages/Accounting/BankAccounts'

// Reports — Inventory
import InventoryDashboard from '../pages/Reports/InventoryReports/InventoryDashboard'
import CurrentStock from '../pages/Reports/InventoryReports/CurrentStock'
import LowStock from '../pages/Reports/InventoryReports/LowStock'
import OutOfStock from '../pages/Reports/InventoryReports/OutOfStock'
import StockMovement from '../pages/Reports/InventoryReports/StockMovement'
import PurchaseSummary from '../pages/Reports/InventoryReports/PurchaseSummary'
import SalesSummary from '../pages/Reports/InventoryReports/SalesSummary'
import StockAdjustmentsReport from '../pages/Reports/InventoryReports/StockAdjustmentsReport'
import DeadStock from '../pages/Reports/InventoryReports/DeadStock'
import FastSlowItems from '../pages/Reports/InventoryReports/FastSlowItems'

// Reports — Sales & Purchase
import SalesReport from '../pages/Reports/SalesPurchase/SalesReport'
import PurchaseReport from '../pages/Reports/SalesPurchase/PurchaseReport'
import DCReport from '../pages/Reports/SalesPurchase/DCReport'
import ExpenseReport from '../pages/Reports/SalesPurchase/ExpenseReport'
import PaymentReport from '../pages/Reports/SalesPurchase/PaymentReport'

// Reports — Financial
import CashFlowStatement from '../pages/Reports/Financial/CashFlowStatement'
import BalanceSheet from '../pages/Reports/Financial/BalanceSheet'

// Settings
import AppSettings from '../pages/Settings/AppSettings'
import Stores from '../pages/Settings/Stores'
import RolesPermissions from '../pages/Settings/RolesPermissions'
import ModuleAccess from '../pages/Settings/ModuleAccess'
import Reminders from '../pages/Settings/Reminders'
import ActivityLog from '../pages/Settings/ActivityLog'

export const router = createBrowserRouter([
    { path: '/login', element: <Login /> },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),

    children: [
      { index: true, element: <Dashboard /> },
      { path: 'pos', element: <POSTerminal /> },

      // Products
      { path: 'products', element: <AllProducts /> },
      { path: 'products/add', element: <AddProduct /> },
      { path: 'products/categories', element: <Categories /> },
      { path: 'products/brands', element: <Brands /> },
      { path: 'products/units', element: <Units /> },
      { path: 'products/manufacturers', element: <Manufacturers /> },
      { path: 'products/import', element: <ImportCSV /> },
      { path: 'products/barcode-labels', element: <BarcodeLabels /> },

      // Stock
      { path: 'stock/opening', element: <OpeningStock /> },
      { path: 'stock/adjustments', element: <Adjustments /> },
      { path: 'stock/transfers', element: <Transfers /> },

      // Sales
      { path: 'sales/orders', element: <SalesOrders /> },
      { path: 'sales/orders/new', element: <NewSalesOrder /> },
      { path: 'sales/invoices', element: <AllInvoices /> },
      { path: 'sales/invoices/new', element: <NewInvoice /> },
      { path: 'sales/returns', element: <SaleReturns /> },
      { path: 'sales/discounts', element: <Discounts /> },
      { path: 'sales/challans', element: <DeliveryChallans /> },
      { path: 'sales/challans/new', element: <NewChallan /> },
      { path: 'sales/dc-returns', element: <DCReturns /> },
      { path: 'sales/receive-payments', element: <ReceivePayments /> },

      // Purchases
      { path: 'purchases/orders', element: <PurchaseOrders /> },
      { path: 'purchases/orders/new', element: <NewPO /> },
      { path: 'purchases', element: <AllPurchases /> },
      { path: 'purchases/new', element: <NewPurchase /> },
      { path: 'purchases/returns', element: <PurchaseReturns /> },
      { path: 'purchases/pay-suppliers', element: <PaySuppliers /> },

      // Expenses / Contacts / Staff
      { path: 'expenses', element: <Expenses /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'staff', element: <StaffHR /> },

      // GST & Tax
      { path: 'gst/gstr1', element: <GSTR1 /> },
      { path: 'gst/gstr3b', element: <GSTR3B /> },
      { path: 'gst/tax-profiles', element: <TaxProfiles /> },
      { path: 'gst/tds-tcs', element: <TDSTCS /> },
      { path: 'gst/gstin-lookup', element: <GSTINLookup /> },

      // Accounting
      { path: 'accounting', element: <Accounting /> },
      { path: 'accounting/bank', element: <BankAccounts /> },

      // Reports — Inventory
      { path: 'reports/inventory', element: <InventoryDashboard /> },
      { path: 'reports/inventory/current-stock', element: <CurrentStock /> },
      { path: 'reports/inventory/low-stock', element: <LowStock /> },
      { path: 'reports/inventory/out-of-stock', element: <OutOfStock /> },
      { path: 'reports/inventory/stock-movement', element: <StockMovement /> },
      { path: 'reports/inventory/purchase-summary', element: <PurchaseSummary /> },
      { path: 'reports/inventory/sales-summary', element: <SalesSummary /> },
      { path: 'reports/inventory/stock-adjustments', element: <StockAdjustmentsReport /> },
      { path: 'reports/inventory/dead-stock', element: <DeadStock /> },
      { path: 'reports/inventory/fast-slow', element: <FastSlowItems /> },

      // Reports — Sales & Purchase
      { path: 'reports/sales', element: <SalesReport /> },
      { path: 'reports/purchases', element: <PurchaseReport /> },
      { path: 'reports/dc', element: <DCReport /> },
      { path: 'reports/expenses', element: <ExpenseReport /> },
      { path: 'reports/payments', element: <PaymentReport /> },

      // Reports — Financial
      { path: 'reports/cash-flow', element: <CashFlowStatement /> },
      { path: 'reports/balance-sheet', element: <BalanceSheet /> },

      // Settings
      { path: 'settings/app', element: <AppSettings /> },
      { path: 'settings/stores', element: <Stores /> },
      { path: 'settings/roles', element: <RolesPermissions /> },
      { path: 'settings/module-access', element: <ModuleAccess /> },
      { path: 'settings/reminders', element: <Reminders /> },
      { path: 'settings/activity-log', element: <ActivityLog /> },
    ],
  },
])