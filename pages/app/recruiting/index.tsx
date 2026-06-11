import { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PageWrapper } from '../../../components/layout/page-wrapper';
import RecruitingTracker from '../../../modules/recruiting';
import type { Opportunity } from '../../../modules/recruiting';

interface Props {
  opportunities: Opportunity[];
}

const RecruitingPage = ({ opportunities }: Props) => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    if (session === null) {
      router.replace('/app/login?next=/app/recruiting');
    }
  }, [session, router]);

  if (!session) return null;

  return (
    <PageWrapper title="Recruiting — Nick White">
      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-end px-6 pt-4">
          <button
            onClick={() => supabase.auth.signOut()}
            className="text-xs text-gray-400 hover:text-gray-600"
          >
            Sign out
          </button>
        </div>
        <RecruitingTracker initialOpportunities={opportunities} />
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const filePath = path.join(process.cwd(), 'data', 'recruiting.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const opportunities: Opportunity[] = JSON.parse(raw);
  return { props: { opportunities } };
};

export default RecruitingPage;
