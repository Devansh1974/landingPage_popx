export default function Account() {
    return (
      <div className="p-6">
        <h1 className="text-lg font-semibold mb-4">Account Settings</h1>
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="font-bold">Marry Doe</h2>
            <p className="text-gray-600">Marry@gmail.com</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    );
  }
  