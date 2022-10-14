import { gql } from "apollo-server";
// http://localhost:3000/posts?_start=0&_limit=2&_order=asc&_sort=indexRef

export const apiFilterTypeDefs = gql`
 input ApiFilterInput {
    _sort:String
    _order:OrderApiFilter
    _start:Int
    _limit:Int 
     
 }
 enum OrderApiFilter{
    ASC
    DESC
 }
 


` 