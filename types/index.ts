export type UserRole = 'buyer' | 'agent' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  images: string[];
  amenities: string[];
  agent_id: string;
  status: 'available' | 'sold' | 'pending';
  created_at: string;
}

export interface Inquiry {
  id: string;
  property_id: string;
  user_id: string;
  message: string;
  created_at: string;
}

// Supabase Database Types (Placeholder for generated types)
export type Database = {
  public: {
    Tables: {
      properties: {
        Row: Property;
        Insert: Omit<Property, 'id' | 'created_at'>;
        Update: Partial<Omit<Property, 'id' | 'created_at'>>;
      };
      users: {
        Row: User;
        Insert: Omit<User, 'id' | 'created_at'>;
        Update: Partial<Omit<User, 'id' | 'created_at'>>;
      };
      inquiries: {
        Row: Inquiry;
        Insert: Omit<Inquiry, 'id' | 'created_at'>;
        Update: Partial<Omit<Inquiry, 'id' | 'created_at'>>;
      };
    };
  };
};
