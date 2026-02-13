export interface Category {
    _id?: string;
    name: string;
    uiLabel?: string;
    slug: string;
    description?: string;
    icon?: string;
    priority?: number;
    isActive?: boolean;
    status?: "active" | "inactive";
    meta?: {
        title?: string;
        description?: string;
        keywords?: string | string[];
        ogImage?: string;
    };
    createdAt?: string;
    updatedAt?: string;
}

export interface Block {
    _id?: string;
    type: string;
    content: any;
    order: number;
}

export interface Content {
    _id?: string;
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    blocks?: Block[];
    category?: string | Category;
    coverImage?: string;
    author?: string;
    status?: "draft" | "published" | "archived";
    meta?: {
        title?: string;
        description?: string;
        keywords?: string[];
        ogImage?: string;
    };
    createdAt?: string;
    updatedAt?: string;
}

export * from "./auth";
