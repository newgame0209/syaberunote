          <form 
            className="space-y-3 md:space-y-4" 
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });
                const data = await response.json();
                setSubmitStatus({
                  success: data.success,
                  message: data.message
                });
              } catch (error) {
                setSubmitStatus({
                  success: false,
                  message: '送信に失敗しました。時間をおいて再度お試しください。'
                });
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
