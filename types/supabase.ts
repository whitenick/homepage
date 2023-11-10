export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      behavior: {
        Row: {
          created_at: string
          description: string | null
          frequencyMax: number | null
          id: number
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          frequencyMax?: number | null
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          frequencyMax?: number | null
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      student: {
        Row: {
          created_at: string
          email: string | null
          firstName: string | null
          id: number
          lastName: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
