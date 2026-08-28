export interface ErrorMessage {
  title: string
  description: string
}

export function getErrorMessage(error: unknown): ErrorMessage {
  if (error instanceof TypeError) {
    return {
      title: 'Sem conexão',
      description: 'Verifique sua conexão com a internet e tente novamente.',
    }
  }

  if (error instanceof Error && error.name === 'StreamersApiError') {
    return {
      title: 'API indisponível',
      description: 'O serviço de streamers não está disponível no momento.',
    }
  }

  return {
    title: 'Não foi possível carregar',
    description: 'Ocorreu um problema inesperado. Tente novamente.',
  }
}
