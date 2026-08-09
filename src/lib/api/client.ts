export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export const apiClient = {
  async get<T>(url: string, init?: RequestInit): Promise<T> {
    const response = await fetch(url, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init?.headers,
      },
    });

    if (!response.ok) {
      throw new APIError(response.status, response.statusText);
    }

    return response.json();
  },

  async post<T>(url: string, body: any, init?: RequestInit): Promise<T> {
    const response = await fetch(url, {
      ...init,
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...init?.headers,
      },
    });

    if (!response.ok) {
      throw new APIError(response.status, response.statusText);
    }

    return response.json();
  },
};
