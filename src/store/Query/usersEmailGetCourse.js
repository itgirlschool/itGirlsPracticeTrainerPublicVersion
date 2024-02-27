import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export  const emailApi = createApi({
    reducerPath:'emailApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://itgirlschoolcom.getcourse.ru/pl/api/account/exports'}),
    endpoints: (builder)=>({
        getUserByGetCourse:builder.query({
            query: () =>({
                url:'/37590326?key=ihEXIXPkG5IZKMSf1FIzh9XVwoPRygAkMEqxAO67RH2ZGQlA9HPDCG1ziGLVfuwQ1vKuApwReh1h3ADxjR4En6OFyF7yEhxuxg7Uty5KUKAJdSjiw3bXWpjJY1rPgkYb',
                method:'GET'
            })
        })
    })
})

export const  {useGetUserByGetCourseQuery} = emailApi
