import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';


import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

const posts = [
    {
        id: 1,
        user_id: 1,
        title: "25 é natal",
        slug: "Música",
        content: "O refrão da música se resume em ...",
        image: "null",
        created_at: "11/08/2025"
    },
    {
        id: 2,
        user_id: 1,
        title: "JIngle bell",
        slug: "Música",
        content: "Diferentemente da música de natal ...",
        image: "null",
        created_at: "11/08/2025"
    },
    {
        id: 3,
        user_id: 2,
        title: "Chevrolet Impala",
        slug: "Carros",
        content: "Ao contrário do nome, isto é uma máquina.",
        image: "foto_de_carro.jpeg",
        created_at: "11/08/2025"
    },
];

export default function PostIndex() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="flex justify-end">
                    <Button variant="outline">
                        <Link href={route('posts.create')}>Clica aqui!</Link>
                    </Button>
                </div>
                
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[100px]">Título</TableHead>
                            <TableHead>TAG</TableHead>
                            <TableHead>Conteúdo</TableHead>
                            <TableHead className="text-center">Autor</TableHead>
                            <TableHead>Imagem</TableHead>
                            <TableHead>Criado em</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {posts.map((post) => (
                            <TableRow key={post.id}>
                                <TableCell className="font-medium">{post.title}</TableCell>
                                <TableCell>{post.slug}</TableCell>
                                <TableCell>{post.content}</TableCell>
                                <TableCell className="text-center">{post.user_id}</TableCell>
                                <TableCell>{post.image}</TableCell>
                                <TableCell className="text-left">{post.created_at}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>

                        <TableFooter>
                            <TableRow>
                            <TableCell className="text-right" colSpan={6}>Total publicações: {posts.length}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
