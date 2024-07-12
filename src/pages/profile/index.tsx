import { useGetSessionQuery } from '@api/__generated__/graphql';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';
import { ProfileForm } from '@components/profileForm';

export const ProfilePage = () => {
  const { data } = useGetSessionQuery({ fetchPolicy: 'network-only' });
  return (
    <PageLayout>
      <PageTitle title='Профиль' />
      {data && <ProfileForm user={data?.session.user} />}
    </PageLayout>
  );
};
