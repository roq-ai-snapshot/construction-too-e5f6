interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Individual Customer'],
  tenantRoles: ['Business Owner', 'Outlet Manager', 'Sales Associate', 'Customer Service Representative'],
  tenantName: 'Supplier',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage personal information', 'View suppliers', 'Create bookings', 'Edit bookings'],
  ownerAbilities: ['Manage users', 'Manage suppliers'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/76802c53-8034-4552-91e9-a6c1f2068f5c',
};
