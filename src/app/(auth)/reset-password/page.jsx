import React, { Suspense } from 'react';
import ResetPasswordForm from './reset-password-form';

const ResetPasswordPage = () => {
    return (
        <div>
            <h3>Reset Password</h3>
            <Suspense fallback="Loading">
                <ResetPasswordForm>
                    
                </ResetPasswordForm>
            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;