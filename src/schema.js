import * as yup from "yup"


const regex = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).+$';

export const schema = yup.object().shape({
    
    email:yup.string().email('Please type an e mail format').required(),
    
    age:yup.number().min(18 , 'age must be greater than 18')
    .max(100 , 'age must be smaller than 100').integer('type an integer number'),
    
    password:
    yup
    .string()
    .min(5,'Password must be at least 5 character')
    .matches(regex,'Your Password not strong enough')
    .required('Password required'),
    
    
    confirm_password:yup
    .string()
    .oneOf([yup.ref('password')],'Confirm is not true')
    .required(),
});