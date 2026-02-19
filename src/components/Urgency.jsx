
import { AlertTriangle, Timer } from "lucide-react";
import { agencyConfig } from "../data/agencyConfig";

export default function Urgency() {
    const { title, subtitle, deadline, slotsLeft } = agencyConfig.urgency;

    return (
        <section className="py-12 bg-yellow-50 border-y border-yellow-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-100 rounded-full animate-pulse">
                            <AlertTriangle className="h-8 w-8 text-yellow-600" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">{title}</h3>
                            <p className="text-yellow-800 font-medium">{subtitle}</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 bg-white px-6 py-4 rounded-xl shadow-sm border border-yellow-100 w-full md:w-auto">
                        <div className="text-center w-full sm:w-auto">
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Tersisa</p>
                            <p className="text-3xl font-extrabold text-red-600">{slotsLeft} Slot</p>
                        </div>
                        <div className="hidden sm:block h-10 w-px bg-gray-200"></div>
                        <div className="flex items-center justify-center gap-2 text-slate-700 w-full sm:w-auto">
                            <Timer className="h-5 w-5 flex-shrink-0" />
                            <span className="font-medium text-sm md:text-base">{deadline}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
