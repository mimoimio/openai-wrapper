export interface MessageModel {
    id: string | null;
    chat_id: string;
    role: string;
    content: string;
}