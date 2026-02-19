
import { MapPin } from "lucide-react";
import { agencyConfig } from "../data/agencyConfig";

export default function Profile() {
    const { profile } = agencyConfig;

    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-shrink-0">
                        {/* Using a placeholder div for the image to ensure it looks okay even without the asset */}
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200">
                            {/* Ideally valid src would be here. using alt text for now if image missing */}
                            <img
                                src={profile.photoUrl}
                                alt={profile.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'text-gray-400');
                                    e.target.parentNode.innerText = 'Foto Profil';
                                }}
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Siapa di balik KrisDigital?</h2>
                        <h3 className="text-xl text-blue-600 font-semibold mb-4">{profile.name} — {profile.role}</h3>

                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            "{profile.bio}"
                        </p>

                        <div className="inline-flex items-center gap-2 text-gray-500 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                            <MapPin className="h-5 w-5 text-red-500" />
                            <span className="text-sm">{profile.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
