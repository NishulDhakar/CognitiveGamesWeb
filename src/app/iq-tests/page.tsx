"use client";

import IQTestContainer from "@/components/iq-test/IQTestContainer";
import BackToDashboard from "@/components/common/BackToDashboard";
import { motion } from "framer-motion";

export default function IQTestPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden flex flex-col">
            {/* Subtle Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 p-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-4"
                >
                    <BackToDashboard />
                </motion.div>

                <IQTestContainer />
            </div>
        </div>
    );
}
