import { AuthForm } from '@components/authForm';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';

export const AuthPage = () => (
  <PageLayout>
    <PageTitle title='Авторизация' />
    <AuthForm onSubmit={() => console.log('dsf')} />
  </PageLayout>
);
