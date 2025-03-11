
import { WarmupConfig } from "@/components/WarmupConfig";

export default function EmailWarmup() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Email Warm-up</h1>
      <p className="text-muted-foreground mb-6">Configure your email warm-up settings to improve deliverability</p>
      
      <WarmupConfig />
    </div>
  );
}
