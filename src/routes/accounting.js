module.exports = [
    {
        route: '/accounting/journal-transaction',
        name: 'journal-transaction',
        moduleId: './modules/accounting/journal-transaction/index',
        nav: true,
        title: 'Jurnal Transaksi',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/accounting/post-transaction',
        name: 'journal-transaction',
        moduleId: './modules/accounting/posting-transactions/index',
        nav: true,
        title: 'Posting Jurnal Transaksi',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/accounting/reports/journal-transaction-report',
        name: 'journal-transaction-report',
        moduleId: './modules/accounting/reports/journal-transaction-report/index',
        nav: true,
        title: 'Laporan Jurnal Transaksi',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/accounting/chart-of-accounts-view',
        name: 'chart-of-accounts',
        moduleId: './modules/accounting/chart-of-accounts-view/index',
        nav: true,
        title: 'Chart of Account',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "PBL.01": 1, "B4": 1, "B9": 1, "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/accounting/chart-of-accounts',
        name: 'chart-of-accounts',
        moduleId: './modules/accounting/chart-of-accounts/index',
        nav: true,
        title: 'Chart of Account',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/accounting/revise-empty-chart-of-accounts',
        name: 'revise-empty-chart-of-accounts',
        moduleId: './modules/accounting/revise-empty-chart-of-accounts/index',
        nav: true,
        title: 'Pengisian Nama Chart of Account',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/accounting/locking-transactions',
        name: 'locking-transactions',
        moduleId: './modules/accounting/locking-transactions/index',
        nav: true,
        title: 'Penguncian Transaksi',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/accounting/reports/sub-ledgers-report',
        name: 'sub-ledgers',
        moduleId: './modules/accounting/reports/sub-ledgers-report/index',
        nav: true,
        title: 'Laporan Sub Ledger',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/accounting/reports/general-ledgers-report',
        name: 'general-ledgers',
        moduleId: './modules/accounting/reports/general-ledgers-report/index',
        nav: true,
        title: 'Laporan General Ledger',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/accounting/reports/flow-penerimaan',
        name: 'flow-penerimaan',
        moduleId: './modules/accounting/reports/flow-penerimaan/index',
        nav: true,
        title: 'Laporan Flow Detail Penerimaan',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: 'garment-central-bill-reception/reports',
        name: 'garment-central-bill-reception-report',
        moduleId: './modules/accounting/reports/central-bill-reception-report/index',
        nav: true,
        title: 'Laporan Data Penerimaan Bon Pusat',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: 'garment-central-bill-expenditure/reports',
        name: 'garment-central-bill-expenditure-report',
        moduleId: './modules/accounting/reports/central-bill-expenditure-report/index',
        nav: true,
        title: 'Laporan Data Pengeluaran Bon Pusat',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: 'garment-correction-note-reception/reports',
        name: 'garment-correction-note-reception-report',
        moduleId: './modules/accounting/reports/correction-note-reception-report/index',
        nav: true,
        title: 'Laporan Data Penerimaan Nota Koreksi',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: 'garment-correction-note-expenditure/reports',
        name: 'garment-correction-note-expenditure-report',
        moduleId: './modules/accounting/reports/correction-note-expenditure-report/index',
        nav: true,
        title: 'Laporan Data Pengeluaran Nota Koreksi',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: 'garment-daily-purchase-order/reports',
        name: 'garment-daily-purchase-order-report',
        moduleId: './modules/accounting/reports/garment-daily-purchase-report/index',
        nav: true,
        title: 'Laporan Buku Harian Pembelian | Garment',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: 'accounting/others-expenditure-proof-document',
        name: 'others-expenditure-proof-document',
        moduleId: './modules/accounting/others-expenditure-proof-document/index',
        nav: true,
        title: 'Bukti Pengeluaran Bank Lain - Lain',
        auth: true,
        settings: {
            group: "finance",
            permission: { "B1": 1, "C.01": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
      route: 'garment-purchase-order/purchase-book-report',
      name: 'garment-purchasing-book-report',
      moduleId: './modules/garment-purchasing/purchase-book-report/index',
      nav: true,
      title: 'Laporan Buku Pembelian Bahan Baku, Embalace, Umum',
      auth: true,
      settings: {
          group: "accounting",
          permission: {"C.01": 1, "PBL.01": 1, "B9": 1, "B1": 1},
          iconClass: 'fa fa-dashboard'
      }
    },
    {
        route: 'accounting/accounting-stock-report',
        name: 'accounting-stock-report',
        moduleId: './modules/accounting/reports/accounting-stock-report/index',
        nav: true,
        title: 'Laporan Stok Pembukuan',
        auth: true,
        settings: {
            group: "accounting",
            permission: {"C.01": 1, "PBL.01": 1, "B9": 1, "B1": 1},
            iconClass: 'fa fa-dashboard'
        }
      },

      {
        route: 'garment-receipt-correction-report',
        name: 'garment-receipt-correction-report',
        moduleId: './modules/garment-purchasing/garment-receipt-correction-report/index',
        nav: true,
        title: 'Laporan Koreksi Penerimaan',
        auth: true,
        settings: {
            group: "accounting",
            permission: {"C.01": 1, "PBL.01": 1, "B9": 1, "B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'garment-flow-detail-material/reports',
        name: 'garment-flow-detail-material-report',
        moduleId: './modules/accounting/reports/garment-flow-detail-material-report/index',
        nav: true,
        title: 'Laporan Detail Flow Pengeluaran Bahan Baku',
        auth: true,
        settings: {
            group: "accounting",
            permission: {"C.01": 1, "PBL.01": 1, "B9": 1, "B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'garment-purchase-book-report',
        name: 'garment-purchase-book-report',
        moduleId: './modules/garment-purchasing/garment-purchase-book-report/index',
        nav: true,
        title: 'Laporan Buku Harian Pembelian Term Of Payment',
        auth: true,
        settings: {
            group: "accounting",
            permission: {"C.01": 1, "PBL.01": 1, "B9": 1, "B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    }
];
