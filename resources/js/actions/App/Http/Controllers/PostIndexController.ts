import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PostIndexController::__invoke
 * @see app/Http/Controllers/PostIndexController.php:13
 * @route '/posts'
 */
const PostIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PostIndexController.url(options),
    method: 'get',
})

PostIndexController.definition = {
    methods: ["get","head"],
    url: '/posts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostIndexController::__invoke
 * @see app/Http/Controllers/PostIndexController.php:13
 * @route '/posts'
 */
PostIndexController.url = (options?: RouteQueryOptions) => {
    return PostIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostIndexController::__invoke
 * @see app/Http/Controllers/PostIndexController.php:13
 * @route '/posts'
 */
PostIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PostIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PostIndexController::__invoke
 * @see app/Http/Controllers/PostIndexController.php:13
 * @route '/posts'
 */
PostIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PostIndexController.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PostIndexController::__invoke
 * @see app/Http/Controllers/PostIndexController.php:13
 * @route '/posts'
 */
    const PostIndexControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: PostIndexController.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PostIndexController::__invoke
 * @see app/Http/Controllers/PostIndexController.php:13
 * @route '/posts'
 */
        PostIndexControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PostIndexController.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PostIndexController::__invoke
 * @see app/Http/Controllers/PostIndexController.php:13
 * @route '/posts'
 */
        PostIndexControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PostIndexController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    PostIndexController.form = PostIndexControllerForm
export default PostIndexController