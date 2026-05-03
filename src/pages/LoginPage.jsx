import styles from "../styles/LoginPage.module.css"
import { useForm } from "react-hook-form";
import { regex, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().min(1, "กรุณากรอกอีเมล").email("อีเมลไม่ถูกต้อง"),
    //รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร
    password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
    confirmPassword: z.string(),
    tel: z.string().regex(/^08\d{8}$/, "กรุณากรอกตัวเลข 10 ตัว และขึ้นต้นด้วย 08")
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "รหัสผ่านไม่ตรงกัน"
});

export default function LoginPage() {

    const { 
        register, 
        handleSubmit, 
        formState: { errors } } 
        = useForm({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Welcome to my app</h2>
            <form onSubmit ={handleSubmit(onSubmit)}className={styles.formCard}>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email</label>
                    <input {...register("email")} className={styles.input} 
                    placeholder="example@gmail.com"/>
                    {
                        errors.email && (<span className={styles.errorText}>{errors.email.message}</span>)
                    }
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Password</label>
                    <input 
                        {...register("password")}
                        className={styles.input}
                        type="password"
                        placeholder="**********"
                    />
                    {
                        errors.password && (<span className={styles.errorText}>{errors.password.message}</span>)
                    }

                </div>

                                <div className={styles.inputGroup}>
                    <label className={styles.label}>Confirm Password</label>
                    <input 
                        {...register("confirmPassword")}
                        className={styles.input}
                        type="password"
                        placeholder="**********"
                    />
                    {
                        errors.confirmPassword && (<span className={styles.errorText}>{errors.confirmPassword.message}</span>)
                    }

                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Tel</label>
                    <input 
                    {...register("tel")} className={styles.input} 
                    placeholder=""/>
                    {
                        errors.tel && (<span className={styles.errorText}>{errors.tel.message}</span>)
                    }
                </div>

                <button className={styles.submitButton}>Login</button>
            </form>
        </div>
    );
}