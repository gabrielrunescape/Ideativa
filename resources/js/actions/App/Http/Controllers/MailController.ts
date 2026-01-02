import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MailController::sendEmail
 * @see app/Http/Controllers/MailController.php:29
 * @route '/send-email'
 */
export const sendEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendEmail.url(options),
    method: 'post',
})

sendEmail.definition = {
    methods: ["post"],
    url: '/send-email',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MailController::sendEmail
 * @see app/Http/Controllers/MailController.php:29
 * @route '/send-email'
 */
sendEmail.url = (options?: RouteQueryOptions) => {
    return sendEmail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MailController::sendEmail
 * @see app/Http/Controllers/MailController.php:29
 * @route '/send-email'
 */
sendEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendEmail.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MailController::sendEmail
 * @see app/Http/Controllers/MailController.php:29
 * @route '/send-email'
 */
    const sendEmailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendEmail.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MailController::sendEmail
 * @see app/Http/Controllers/MailController.php:29
 * @route '/send-email'
 */
        sendEmailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendEmail.url(options),
            method: 'post',
        })
    
    sendEmail.form = sendEmailForm
/**
* @see \App\Http\Controllers\MailController::getSendEmailForView
 * @see app/Http/Controllers/MailController.php:11
 * @route '/send-email'
 */
export const getSendEmailForView = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSendEmailForView.url(options),
    method: 'get',
})

getSendEmailForView.definition = {
    methods: ["get","head"],
    url: '/send-email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MailController::getSendEmailForView
 * @see app/Http/Controllers/MailController.php:11
 * @route '/send-email'
 */
getSendEmailForView.url = (options?: RouteQueryOptions) => {
    return getSendEmailForView.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MailController::getSendEmailForView
 * @see app/Http/Controllers/MailController.php:11
 * @route '/send-email'
 */
getSendEmailForView.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSendEmailForView.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MailController::getSendEmailForView
 * @see app/Http/Controllers/MailController.php:11
 * @route '/send-email'
 */
getSendEmailForView.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSendEmailForView.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MailController::getSendEmailForView
 * @see app/Http/Controllers/MailController.php:11
 * @route '/send-email'
 */
    const getSendEmailForViewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getSendEmailForView.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MailController::getSendEmailForView
 * @see app/Http/Controllers/MailController.php:11
 * @route '/send-email'
 */
        getSendEmailForViewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSendEmailForView.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MailController::getSendEmailForView
 * @see app/Http/Controllers/MailController.php:11
 * @route '/send-email'
 */
        getSendEmailForViewForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSendEmailForView.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getSendEmailForView.form = getSendEmailForViewForm
const MailController = { sendEmail, getSendEmailForView }

export default MailController