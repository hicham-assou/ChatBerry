export interface ChatMessage {
    role: string;
    content: string;
}

export interface ChatCompletionResponse {
    choices: {
        message: ChatMessage;
    }[];
}
