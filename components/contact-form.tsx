"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

type ContactFormProps = {
  onSuccess?: () => void;
};

/* ---------------------- country codes list (cleaned) --------------------- */
const countryCodes = [
  { code: "+1", country: "USA/Canada", id: "us-ca" },
  { code: "+44", country: "UK", id: "uk" },
  { code: "+971", country: "UAE", id: "uae" },
  { code: "+91", country: "India", id: "india" },
  { code: "+61", country: "Australia", id: "australia" },
  { code: "+33", country: "France", id: "france" },
  { code: "+49", country: "Germany", id: "germany" },
  { code: "+81", country: "Japan", id: "japan" },
  { code: "+55", country: "Brazil", id: "brazil" },
  { code: "+34", country: "Spain", id: "spain" },
  { code: "+7", country: "Russia", id: "russia" },
  { code: "+39", country: "Italy", id: "italy" },
  { code: "+82", country: "South Korea", id: "south-korea" },
  { code: "+52", country: "Mexico", id: "mexico" },
  { code: "+20", country: "Egypt", id: "egypt" },
  { code: "+27", country: "South Africa", id: "south-africa" },
  { code: "+86", country: "China", id: "china" },
  { code: "+30", country: "Greece", id: "greece" },
  { code: "+62", country: "Indonesia", id: "indonesia" },
  { code: "+45", country: "Denmark", id: "denmark" },
  { code: "+47", country: "Norway", id: "norway" },
  { code: "+48", country: "Poland", id: "poland" },
  { code: "+41", country: "Switzerland", id: "switzerland" },
  { code: "+31", country: "Netherlands", id: "netherlands" },
  { code: "+32", country: "Belgium", id: "belgium" },
  { code: "+353", country: "Ireland", id: "ireland" },
  { code: "+46", country: "Sweden", id: "sweden" },
  { code: "+56", country: "Chile", id: "chile" },
  { code: "+57", country: "Colombia", id: "colombia" },
  { code: "+58", country: "Venezuela", id: "venezuela" },
  { code: "+60", country: "Malaysia", id: "malaysia" },
  { code: "+63", country: "Philippines", id: "philippines" },
  { code: "+64", country: "New Zealand", id: "new-zealand" },
  { code: "+98", country: "Iran", id: "iran" },
  { code: "+66", country: "Thailand", id: "thailand" },
  { code: "+90", country: "Turkey", id: "turkey" },
  { code: "+94", country: "Sri Lanka", id: "sri-lanka" },
  { code: "+351", country: "Portugal", id: "portugal" },
  { code: "+974", country: "Qatar", id: "qatar" },
  { code: "+254", country: "Kenya", id: "kenya" },
  { code: "+213", country: "Algeria", id: "algeria" },
  { code: "+234", country: "Nigeria", id: "nigeria" },
  { code: "+93", country: "Afghanistan", id: "afghanistan" },
  { code: "+880", country: "Bangladesh", id: "bangladesh" },
  { code: "+251", country: "Ethiopia", id: "ethiopia" },
  { code: "+963", country: "Syria", id: "syria" },
];




export default function ContactForm({ onSuccess }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("+971");
  const [formSubmitted, setFormSubmitted] = useState(false);

  /* ------------------------------------------------------------------------ */
  /*                              SUBMIT HANDLER                              */
  /* ------------------------------------------------------------------------ */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;

    // Format data properly for SheetDB
    const formData = {
      "form-name": "contact", // Netlify form identifier
      firstName: form.firstName.value.trim(),
      email: form.email.value.trim(),
      // Format phone number as text with a single quote prefix to prevent formula errors
      phone: `'${countryCode} ${form.phone.value.trim()}`,
      description: form.description.value.trim(),
    };

    try {
      // Submit to SheetDB with proper formatting
      const res = await fetch("https://sheetdb.io/api/v1/xs57v33d00wiy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ data: formData }),
      });

      const result = await res.json();
      console.log('Response:', result); // Debug log

      if (res.ok && result?.created) {
        toast({
          title: "Form submitted successfully!",
          description: "We'll contact you shortly to discuss your business needs.",
        });
        form.reset();
        setFormSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        console.error('API Error:', result);
        throw new Error(result?.error || result?.message || "Something went wrong");
      }
    } catch (error: any) {
      toast({
        title: "Error submitting form!",
        description: error?.message || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  /* ------------------------------------------------------------------------ */
  /*                                 RENDER                                   */
  /* ------------------------------------------------------------------------ */
  return (
    <section
      id="contact"
      className="py-4 sm:py-6 bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-md mx-auto w-full px-3 sm:px-4">
        {formSubmitted ? (
          <div className="text-center p-3 sm:p-4">
            <h3 className="text-sm sm:text-base font-semibold">Thank you!</h3>
            <p className="mt-1 text-xs sm:text-sm">
              We'll contact you shortly to discuss your business needs.
            </p>
          </div>
        ) : (
          <>
            <h2 className="section-title text-center mb-1 text-sm sm:text-base">
              Need Help?
            </h2>
            <p className="text-center text-xs sm:text-sm mb-3 sm:mb-4">
              Get a Callback in just a Minute. Just drop your number below!
            </p>

            <div className="bg-white p-3 sm:p-4 rounded-xl shadow-md">
              {/* ---------------------------- Netlify form --------------------------- */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4"
                
              >
                {/* hidden inputs Netlify needs */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                {/* Name Field */}
                <div className="space-y-1">
                  <label htmlFor="firstName" className="text-xs font-medium">
                    Name *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your full name"
                    required
                    className="text-sm h-9"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-medium">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="text-sm h-9"
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-medium">
                    Phone Number *
                  </label>
                  <div className="flex space-x-2">
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger className="w-1/4 text-xs h-9">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map(({ code, country, id }) => (
                          <SelectItem
                            key={id}
                            value={code}
                            className="text-xs"
                          >
                            {country} ({code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                      className="w-3/4 text-sm h-9"
                    />
                  </div>
                </div>

                {/* Description Field */}
                <div className="space-y-1">
                  <label htmlFor="description" className="text-xs font-medium">
                    Description (optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Additional details or questions"
                    className="w-full h-16 p-2 text-sm border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="gold-btn w-full py-2 text-sm font-medium hover:bg-[#f5d88a] transition-colors duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get a Call Now"}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
