import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PostCreateController::__invoke
 * @see app/Http/Controllers/PostCreateController.php:12
 * @route '/posts/create'
 */
const PostCreateController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PostCreateController.url(options),
    method: 'get',
})

PostCreateController.definition = {
    methods: ["get","head"],
    url: '/posts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostCreateController::__invoke
 * @see app/Http/Controllers/PostCreateController.php:12
 * @route '/posts/create'
 */
PostCreateController.url = (options?: RouteQueryOptions) => {
    return PostCreateController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostCreateController::__invoke
 * @see app/Http/Controllers/PostCreateController.php:12
 * @route '/posts/create'
 */
PostCreateController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PostCreateController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PostCreateController::__invoke
 * @see app/Http/Controllers/PostCreateController.php:12
 * @route '/posts/create'
 */
PostCreateController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PostCreateController.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PostCreateController::__invoke
 * @see app/Http/Controllers/PostCreateController.php:12
 * @route '/posts/create'
 */
    const PostCreateControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: PostCreateController.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PostCreateController::__invoke
 * @see app/Http/Controllers/PostCreateController.php:12
 * @route '/posts/create'
 */
        PostCreateControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PostCreateController.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PostCreateController::__invoke
 * @see app/Http/Controllers/PostCreateController.php:12
 * @route '/posts/create'
 */
        PostCreateControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PostCreateController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    PostCreateController.form = PostCreateControllerForm
export default PostCreateController