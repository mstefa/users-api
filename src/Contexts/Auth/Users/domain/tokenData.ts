import { UserId } from "../../Shared/domain/Users/UserId"
import { UserEmail } from "./UserEmail"

export type tokenData = {
  id:UserId,
  email:UserEmail
}
