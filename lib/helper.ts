import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const checkAdminStatus = async() => {
    const user = await currentUser();
  const admin1 = await db.admin.findUnique({
    where: {
      adminId: user?.id,
    }

  })
  if(admin1){
    return true
  }else {
    return false
  }
}