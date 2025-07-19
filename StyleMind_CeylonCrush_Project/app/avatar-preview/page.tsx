
import AvatarDisplay from './AvatarDisplay';
import RotationControls from './RotationControls';
import ClothingInfoPanel from './ClothingInfoPanel';
import ActionButtons from './ActionButtons';
import LoadingAnimation from './LoadingAnimation';

export default function AvatarViewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-screen max-h-screen">
          {/* Main Avatar Display */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <LoadingAnimation />
              <AvatarDisplay />
              <RotationControls />
            </div>
          </div>
          
          {/* Side Panel */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <ClothingInfoPanel />
            <ActionButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
