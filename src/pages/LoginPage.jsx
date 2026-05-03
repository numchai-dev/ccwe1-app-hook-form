import styles from "../styles/LoginPage.module.css"
import { useForm } from "react-hook-form";
import { regex, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    fullName: z.string().min(1, "กรุณากรอกชื่อ-นามสกุล").regex(/^[a-zA-Z]+ [a-zA-Z]+$/, "ชื่อ-นามสกุลไม่ถูกต้อง"),
    userName: z.string().min(1, "กรุณากรอกชื่อผู้ใช้").regex(/^[a-zA-Z0-9]{3,12}$/, "ชื่อผู้ใช้ไม่ถูกต้อง"),
    email: z.string().min(1, "กรุณากรอกอีเมล").email("อีเมลไม่ถูกต้อง"),
    //รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร
    password: z.string().min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"),
    confirmPassword: z.string(),
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
        alert("สมัครสมาชิกสำเร็จ!")
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Welcome to my app</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formCard}>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input {...register("fullName")} className={styles.input}
                        placeholder="John Doe" />
                    {
                        errors.fullName && (<span className={styles.errorText}>{errors.fullName.message}</span>)
                    }
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Username</label>
                    <input {...register("userName")} className={styles.input}
                        />
                    {
                        errors.userName && (<span className={styles.errorText}>{errors.userName.message}</span>)
                    }
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email</label>
                    <input {...register("email")} className={styles.input}
                        placeholder="example@gmail.com" />
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

                <button className={styles.submitButton}>Login</button>
            </form>
        </div>
    );
}