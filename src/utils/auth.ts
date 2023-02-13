
import { LocalStorageService } from "./local-storage"

export const isAthenticate = () => {
  const accessToken = LocalStorageService.get<string>(
    LocalStorageService.OAUTH_TOKEN
  )
  return !!accessToken && accessToken.length > 0;
}