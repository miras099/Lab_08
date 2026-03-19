import { GetServerSideProps } from "next";
import {
  User,
  Notification,
  getCurrentUser,
  getUserNotifications,
  getUserAnalytics,
} from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({
  user,
  notifications,
  analytics,
  currentTime,
}: DashboardProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>

      <h2>Analytics</h2>
      <p>Page Views: {analytics.pageViews}</p>
      <p>Sessions: {analytics.sessions}</p>
      <p>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</p>

      <h2>Notifications ({unreadCount})</h2>
      <ul>
        {notifications.map((n) => (
          <li key={n.id}>
            [{n.type}] {n.message}
          </li>
        ))}
      </ul>

      <p>Last updated: {currentTime}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};