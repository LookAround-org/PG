
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Home, Users, Bell, Settings, Check, X, Plus, Minus } from 'lucide-react';

interface UserQuery {
  id: string;
  userName: string;
  userEmail: string;
  propertyId: string;
  propertyTitle: string;
  sharingType: 'single' | 'double' | 'triple';
  message: string;
  timestamp: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface PropertyAvailability {
  id: string;
  title: string;
  type: 'co-living' | 'men' | 'women';
  availability: {
    single: boolean;
    double: boolean;
    triple: boolean;
  };
  capacity: {
    single: number;
    double: number;
    triple: number;
  };
}

const HostDashboard = () => {
  const { toast } = useToast();
  const [queries, setQueries] = useState<UserQuery[]>([
    {
      id: '1',
      userName: 'Priya Sharma',
      userEmail: 'priya@example.com',
      propertyId: '1',
      propertyTitle: 'Modern Co-living Space in Koramangala',
      sharingType: 'single',
      message: 'Hi, I am interested in a single room. Can we schedule a visit?',
      timestamp: '2024-01-15T10:30:00Z',
      status: 'pending'
    },
    {
      id: '2',
      userName: 'Rahul Kumar',
      userEmail: 'rahul@example.com',
      propertyId: '2',
      propertyTitle: 'Premium Ladies PG with Meals',
      sharingType: 'double',
      message: 'Looking for double sharing accommodation. Is it available?',
      timestamp: '2024-01-14T15:45:00Z',
      status: 'approved'
    }
  ]);

  const [properties, setProperties] = useState<PropertyAvailability[]>([
    {
      id: '1',
      title: 'Modern Co-living Space in Koramangala',
      type: 'co-living',
      availability: {
        single: true,
        double: false,
        triple: true
      },
      capacity: {
        single: 5,
        double: 3,
        triple: 2
      }
    },
    {
      id: '2',
      title: 'Premium Ladies PG with Meals',
      type: 'women',
      availability: {
        single: true,
        double: true,
        triple: false
      },
      capacity: {
        single: 8,
        double: 4,
        triple: 0
      }
    }
  ]);

  const handleQueryAction = (queryId: string, action: 'approve' | 'reject') => {
    setQueries(prev => prev.map(query => 
      query.id === queryId 
        ? { ...query, status: action === 'approve' ? 'approved' : 'rejected' }
        : query
    ));
    
    toast({
      title: `Query ${action === 'approve' ? 'Approved' : 'Rejected'}`,
      description: `User query has been ${action === 'approve' ? 'approved' : 'rejected'} successfully.`,
    });
  };

  const handleAvailabilityChange = (propertyId: string, sharingType: keyof PropertyAvailability['availability'], value: boolean) => {
    setProperties(prev => prev.map(property => 
      property.id === propertyId 
        ? { 
            ...property, 
            availability: { 
              ...property.availability, 
              [sharingType]: value 
            } 
          }
        : property
    ));
    
    toast({
      title: "Availability Updated",
      description: `${sharingType} sharing availability has been updated.`,
    });
  };

  const handleCapacityChange = (propertyId: string, sharingType: keyof PropertyAvailability['capacity'], change: number) => {
    setProperties(prev => prev.map(property => 
      property.id === propertyId 
        ? { 
            ...property, 
            capacity: { 
              ...property.capacity, 
              [sharingType]: Math.max(0, property.capacity[sharingType] + change)
            } 
          }
        : property
    ));
    
    toast({
      title: "Capacity Updated",
      description: `${sharingType} sharing capacity has been updated.`,
    });
  };

  const stats = {
    totalProperties: 5,
    totalQueries: queries.length,
    pendingQueries: queries.filter(q => q.status === 'pending').length,
    occupancyRate: 78,
    monthlyRevenue: 125000
  };

  return (
    <div className="min-h-screen bg-light-gray dark:bg-gray-900 py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-charcoal dark:text-white">Host Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back! Manage your properties and guest queries.</p>
          </div>
          <Link to="/host/properties">
            <Button className="bg-gradient-cool hover:opacity-90">
              <Home className="w-4 h-4 mr-2" />
              View All Properties
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="gradient-border dark:bg-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gradient-cool">{stats.totalProperties}</div>
            </CardContent>
          </Card>
          
          <Card className="gradient-border dark:bg-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Queries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gradient-cool">{stats.totalQueries}</div>
            </CardContent>
          </Card>

          <Card className="gradient-border dark:bg-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Queries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{stats.pendingQueries}</div>
            </CardContent>
          </Card>

          <Card className="gradient-border dark:bg-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Occupancy Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">{stats.occupancyRate}%</div>
            </CardContent>
          </Card>

          <Card className="gradient-border dark:bg-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gradient-cool">₹{stats.monthlyRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="queries" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 dark:bg-gray-800">
            <TabsTrigger value="queries" className="dark:data-[state=active]:bg-gray-700 dark:text-white">User Queries</TabsTrigger>
            <TabsTrigger value="availability" className="dark:data-[state=active]:bg-gray-700 dark:text-white">Manage Availability</TabsTrigger>
            <TabsTrigger value="analytics" className="dark:data-[state=active]:bg-gray-700 dark:text-white">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="queries" className="space-y-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Bell className="w-5 h-5" />
                  User Queries & Requests
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Manage incoming queries from potential guests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {queries.map((query) => (
                    <div key={query.id} className="border dark:border-gray-700 rounded-lg p-4 space-y-3 dark:bg-gray-900">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-charcoal dark:text-white">{query.userName}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{query.userEmail}</p>
                        </div>
                        <Badge variant={
                          query.status === 'pending' ? 'default' :
                          query.status === 'approved' ? 'default' : 'destructive'
                        }>
                          {query.status}
                        </Badge>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{query.propertyTitle}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Interested in: <span className="font-medium capitalize">{query.sharingType} sharing</span>
                        </p>
                      </div>
                      
                      <p className="text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">{query.message}</p>
                      
                      {query.status === 'pending' && (
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            onClick={() => handleQueryAction(query.id, 'approve')}
                            className="bg-green-500 hover:bg-green-600"
                          >
                            <Check className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleQueryAction(query.id, 'reject')}
                          >
                            <X className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="availability" className="space-y-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Settings className="w-5 h-5" />
                  Property Availability Management
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Update room availability and capacity for your properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {properties.map((property) => (
                    <div key={property.id} className="border dark:border-gray-700 rounded-lg p-4 dark:bg-gray-900">
                      <h4 className="font-semibold text-charcoal dark:text-white mb-4">{property.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Single Sharing */}
                        <div className="space-y-4">
                          <Label className="text-sm font-medium dark:text-white">Single Sharing</Label>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={property.availability.single}
                              onCheckedChange={(value) => handleAvailabilityChange(property.id, 'single', value)}
                            />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {property.availability.single ? 'Available' : 'Not Available'}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCapacityChange(property.id, 'single', -1)}
                              disabled={property.capacity.single === 0}
                              className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="min-w-[3rem] text-center font-medium dark:text-white">{property.capacity.single}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCapacityChange(property.id, 'single', 1)}
                              className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Available rooms</p>
                        </div>
                        
                        {/* Double Sharing */}
                        <div className="space-y-4">
                          <Label className="text-sm font-medium dark:text-white">Double Sharing</Label>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={property.availability.double}
                              onCheckedChange={(value) => handleAvailabilityChange(property.id, 'double', value)}
                            />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {property.availability.double ? 'Available' : 'Not Available'}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCapacityChange(property.id, 'double', -1)}
                              disabled={property.capacity.double === 0}
                              className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="min-w-[3rem] text-center font-medium dark:text-white">{property.capacity.double}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCapacityChange(property.id, 'double', 1)}
                              className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Available rooms</p>
                        </div>
                        
                        {/* Triple Sharing */}
                        <div className="space-y-4">
                          <Label className="text-sm font-medium dark:text-white">Triple Sharing</Label>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={property.availability.triple}
                              onCheckedChange={(value) => handleAvailabilityChange(property.id, 'triple', value)}
                            />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {property.availability.triple ? 'Available' : 'Not Available'}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCapacityChange(property.id, 'triple', -1)}
                              disabled={property.capacity.triple === 0}
                              className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="min-w-[3rem] text-center font-medium dark:text-white">{property.capacity.triple}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCapacityChange(property.id, 'triple', 1)}
                              className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Available rooms</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Query Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Total Queries This Month</span>
                      <span className="font-semibold dark:text-white">47</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Approved Queries</span>
                      <span className="font-semibold text-green-500">32</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Pending Queries</span>
                      <span className="font-semibold text-orange-500">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Rejected Queries</span>
                      <span className="font-semibold text-red-500">7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Popular Sharing Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Single Sharing</span>
                      <span className="font-semibold dark:text-white">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Double Sharing</span>
                      <span className="font-semibold dark:text-white">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Triple Sharing</span>
                      <span className="font-semibold dark:text-white">20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HostDashboard;
