/**?
 * 封装了一个promise的函数
 */
import request from "@/utils/request";

/**
 * 用户列表
 *
 * @export
 * @interface UserList
 * 
 */
export interface UserList {
    name: string;
}


/**
 * 获取用户列表
 *
 * @export
 * @param {}
 * @returns {(Promise<UserList | null>)}
 */
export function getUserList(): Promise<UserList | null> {
    return request.get("/userInfo",{});
}