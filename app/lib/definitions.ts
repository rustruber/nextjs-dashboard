// Этот файл содержит определения типов для ваших данных.
// Он описывает структуру данных и то, какой тип данных должно принимать каждое свойство.
// Для простоты обучения мы определяем эти типы вручную.
// Однако эти типы генерируются автоматически, если вы используете ORM, например Prisma.
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Customer = {
    id: string;
    name: string;
    email: string;
    image_url: string;
};
// https://nextjs.org/learn/dashboard-app/getting-started
// Здесь мы вручную определяем типы данных, которые будут возвращаться
// из базы данных. Например, таблица счетов-фактур имеет следующие типы:
export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // В TypeScript это называется типом объединения строк.
    // Это означает, что свойство "status" может принимать только
    // одну из двух строк: 'pending' или 'paid'.
    status: 'pending' | 'paid';
};

export type Revenue = {
    month: string;
    revenue: number;
};

export type LatestInvoice = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
    amount: number;
};

export type InvoicesTable = {
    id: string;
    customer_id: string;
    name: string;
    email: string;
    image_url: string;
    date: string;
    amount: number;
    status: 'pending' | 'paid';
};

export type CustomersTableType = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: number;
    total_paid: number;
};

export type FormattedCustomersTable = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: string;
    total_paid: string;
};

export type CustomerField = {
    id: string;
    name: string;
};

export type InvoiceForm = {
    id: string;
    customer_id: string;
    amount: number;
    status: 'pending' | 'paid';
};

